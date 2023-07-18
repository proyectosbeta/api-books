const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const swaggerRouter = require('./app/helpers/swagger');
const v1BookRouter = require('./app/v1/routes/bookRoutes');
const globalConfig = require('./app/config/global.config');

const { APP_PORT } = globalConfig;
const { URL_DOMAIN } = globalConfig;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Connect to MongoDB database.
mongoose
  .connect('mongodb://localhost:27017/booksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    // Middlewares
    app.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );
    app.use(express.json());
    app.use(methodOverride());
    app.use(limiter);
    if (process.env.NODE_ENV === 'development') {
      app.use(swaggerRouter);
    }
    app.use('/api/v1/books', v1BookRouter);

    // Start server.
    app.listen(APP_PORT, () => {
      console.log(`Node server running on ${URL_DOMAIN}:${APP_PORT}`);
    });

    // @todo close database.
  });
