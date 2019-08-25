import { Request, Response, Router, NextFunction } from 'express';
import { fetchAuthenticatedUser } from '../auth';

const router = Router();

router.get(
  '/qiita/users',
  async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
      const accessToken = extractAccessToken(_req.header('Authorization'));
      if (accessToken === '') {
        return _res.status(401).json({ message: 'Unauthorized' });
      }

      const response = await fetchAuthenticatedUser({ accessToken });

      const userResponse = {
        id: response.id,
        name: response.name,
        imageUrl: response.profile_image_url,
        description: response.description
      };

      return _res.status(200).json(userResponse);
    } catch (error) {
      return _res.status(error.status).json({ message: error.message });
    }
  }
);

const extractAccessToken = (authorizationHeader: any): string => {
  if (authorizationHeader == null) {
    return '';
  }

  const BEARER_TOKEN_PATTERN = /^Bearer[ ]+([^ ]+)[ ]*$/i;

  const result = BEARER_TOKEN_PATTERN.exec(authorizationHeader);

  if (result === null) {
    return '';
  }

  return result[1];
};

export default router;
