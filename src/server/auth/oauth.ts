import { Router, Request, Response } from 'express';
import {
  createAuthorizationState,
  createAuthorizationUrl,
  issueAccessToken
} from '../auth';

const router = Router();

router.get('/request', (req: Request, res: Response) => {
  const authorizationState = createAuthorizationState();
  res.cookie('authorizationState', authorizationState, {
    path: '/',
    httpOnly: true
  });

  return res.redirect(302, createAuthorizationUrl(authorizationState));
});

router.get('/callback', async (req: Request, res: Response) => {
  if (req.cookies.authorizationState == null) {
    // TODO 何らかのエラー処理を行う
  }

  if (req.cookies.authorizationState !== req.query.state) {
    // TODO stateが一致しない場合は何らかのエラー処理を行う
  }

  if (req.query.code == null) {
    // TODO 認可コードが含まれない場合は何らかのエラー処理を行う
  }

  await issueAccessToken(req.query.code)
    .then(tokenResponse => {
      // TODO 仮実装なので後でログイン後のページにredirectするように変更する
      return res
        .status(200)
        .json({ code: req.query.code, token: tokenResponse.token });
    })
    .catch(error => {
      return res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    });
});

export default router;
