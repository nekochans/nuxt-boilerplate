import { Router, Request, Response } from 'express';
import {
  authorizationStateCookieName,
  createAuthorizationState,
  createAuthorizationUrl,
  issueAccessToken,
  redirectAuthorizedUrl,
  sessionIdCookieName
} from '../auth';

const router = Router();

router.get('/request', (req: Request, res: Response) => {
  const authorizationState = createAuthorizationState();
  res.cookie(authorizationStateCookieName(), authorizationState, {
    path: '/',
    httpOnly: true
  });

  return res.redirect(302, createAuthorizationUrl(authorizationState));
});

router.get('/callback', async (req: Request, res: Response) => {
  if (req.cookies.authorizationState == null) {
    return res
      .status(400)
      .send()
      .end();
  }

  if (req.cookies.authorizationState !== req.query.state) {
    return res
      .status(400)
      .send()
      .end();
  }

  if (req.query.code == null) {
    return res
      .status(400)
      .send()
      .end();
  }

  await issueAccessToken(req.query.code)
    .then(tokenResponse => {
      res.cookie(sessionIdCookieName(), tokenResponse.token, {
        path: '/',
        httpOnly: true
      });

      res.clearCookie(authorizationStateCookieName());

      return res.redirect(redirectAuthorizedUrl());
    })
    .catch(error => {
      return res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    });
});

export default router;
