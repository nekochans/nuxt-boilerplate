import express from 'express';
import consola from 'consola';
const { Nuxt, Builder } = require('nuxt');
const app = express();
const host: string = process.env.HOST || '127.0.0.1';
const port: number = Number(process.env.PORT) || 3000;

app.set('port', port);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

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
start();
