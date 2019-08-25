import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/weather', (_req: Request, _res: Response, _next: NextFunction) => {
  return _res.status(200).json({ message: 'Sunny' });
});

export default router;
