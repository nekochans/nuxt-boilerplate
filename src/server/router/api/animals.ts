import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/animals', (_req: Request, _res: Response, _next: NextFunction) => {
  return _res
    .status(200)
    .json({ cat: '🐱 (=^・^=)', dog: '🐶 ⊂ﾟＵ┬───┬~', hamster: '🐹' });
});

export default router;
