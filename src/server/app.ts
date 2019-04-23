import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import consola from 'consola';
import config from '../../nuxt.config';
import weather from './api/weather';
import animals from './api/animals';
import oauth from './auth/oauth';
const router = Router();
const { Nuxt, Builder } = require('nuxt');
const host: string = process.env.HOST || '127.0.0.1';
const port: number = Number(process.env.PORT) || 3000;

router.use(weather);
router.use(animals);
router.use(oauth);

config.dev = !(process.env.NODE_ENV === 'production');

export default async function() {
  const app = express();
  app.set('port', port);

  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(cookieParser());
  app.use('/api', router);
  app.use('/oauth', router);
  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host, (error: Error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
