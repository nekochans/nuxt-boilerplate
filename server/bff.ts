import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import weather from './api/weather';
import animals from './api/animals';
import qiita from './api/qiita';
import oauth from './auth/oauth';
const router = Router();

router.use(weather);
router.use(animals);
router.use(qiita);
router.use(oauth);

const bff = express();

bff.use(cookieParser());
bff.use('/', router);
bff.use('/', router);

export default bff;
