import { Router } from 'express';

const router = Router();

router.get('/animals', (req: any, res: any, next: any) => {
  return res.status(200).json({ cat: '🐱 (=^・^=)', dog: '🐶 ⊂ﾟＵ┬───┬~', hamster: '🐹' });
});

export default router;
