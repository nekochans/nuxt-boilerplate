import { Router, Request, Response } from 'express';
import {
  authorizationStateCookieName,
  createAuthorizationState,
  createAuthorizationUrl,
  issueAccessToken,
  redirectAuthorizedUrl,
  accessTokenCookieName
} from '../auth';

const router = Router();

router.get('/request', (_req: Request, _res: Response) => {
  const authorizationState = createAuthorizationState();
  _res.cookie(authorizationStateCookieName(), authorizationState, {
    path: '/',
    httpOnly: true
  });

  return _res.redirect(302, createAuthorizationUrl(authorizationState));
});

router.get('/callback', async (_req: Request, _res: Response) => {
  if (_req.cookies[authorizationStateCookieName()] == null) {
    return _res
      .status(400)
      .send()
      .end();
  }

  if (_req.cookies[authorizationStateCookieName()] !== _req.query.state) {
    return _res
      .status(400)
      .send()
      .end();
  }

  if (_req.query.code == null) {
    return _res
      .status(400)
      .send()
      .end();
  }

  await issueAccessToken(_req.query.code)
    .then(tokenResponse => {
      _res.cookie(accessTokenCookieName(), tokenResponse.token, {
        path: '/',
        httpOnly: true
      });

      _res.clearCookie(authorizationStateCookieName());

      return _res.redirect(redirectAuthorizedUrl());
    })
    .catch(error => {
      return _res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    });
});

export default router;
