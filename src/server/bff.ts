import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import weather from './router/api/weather';
import animals from './router/api/animals';
import qiita from './router/api/qiita';
import oauth from './router/auth/oauth';

const router = Router();

router.use(weather);
router.use(animals);
router.use(qiita);
router.use(oauth);

const bff = express();

bff.use(cookieParser());
bff.use('/api', router);
bff.use('/oauth', router);

export default bff;
