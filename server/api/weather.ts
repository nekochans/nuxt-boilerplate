import { Router } from 'express';

const router = Router();

router.get('/weather', (req: any, res: any, next: any) => {
  return res.status(200).json({ message: 'Sunny' });
});

export default router;
