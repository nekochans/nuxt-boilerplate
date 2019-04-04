import { Router, Request, Response } from 'express';
import { createAuthorizationState, createAuthorizationUrl } from '../auth';

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

  // TODO 仮実装なので後でトークン発行処理に置き換える
  return res.status(200).json({ code: req.query.code });
});

export default router;
