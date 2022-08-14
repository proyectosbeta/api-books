const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const v1BookRouter = require("./app/v1/routes/bookRoutes.js");
const globalConfig = require("./app/config/global.config.js");
const swaggerUi = require("swagger-ui-express");
const { swagger: v1SwaggerDocs } = require("./app/v1/swagger");
const PORT = globalConfig.PORT;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Connect to MongoDB database.
mongoose
  .connect("mongodb://localhost:27017/booksdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    // Middlewares
    app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );
    app.use(express.json());
    app.use(methodOverride());
    app.use(limiter);
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(v1SwaggerDocs));
    app.use("/api/v1/books", v1BookRouter);

    // Start server.
    app.listen(PORT, function () {
      console.log("Node server running on http://localhost:" + PORT);
    });

    // @todo close database.
  });
