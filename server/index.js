const express = require('express');
const next = require('next');
const cors = require('cors');
// const getConfig = require('../next.config');
// const Router = require('./Router');

// const { port, basePath } = getConfig.publicRuntimeConfig;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const app = express();
  app.use(express.json({ limit: '20kb' }));
  app.use(express.urlencoded({ limit: '20kb', extended: false }));

  app.use(cors());
  app.options('*', cors());

  app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'sameorigin');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
  });

  // app.use(Router);

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(3002, (err) => {
    if (err) throw err;
    console.log(' Server is up and running on port: ' + 3002);
  });
});
