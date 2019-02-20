import express, { Router } from 'express';
import consola from 'consola';
import weather from './api/weather';
import animals from './api/animals';
const router = Router();
const { Nuxt, Builder } = require('nuxt');
const host: string = process.env.HOST || '127.0.0.1';
const port: number = Number(process.env.PORT) || 3000;

router.use(weather);
router.use(animals);

export default async function () {
  const app = express();
  app.set('port', port);

  // Import and Set Nuxt.js options
  const config = require('../../nuxt.config.js');
  config.dev = !(process.env.NODE_ENV === 'production');

  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use('/api', router);
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
