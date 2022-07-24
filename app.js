const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const v1BookRouter = require("./app/v1/routes/bookRoutes.js");
const globalConfig = require("./app/config/global.config.js");
const PORT = globalConfig.PORT;

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
    app.use("/api/v1/books", v1BookRouter);

    // Start server.
    app.listen(PORT, function () {
      console.log("Node server running on http://localhost:" + PORT);
    });

    // @todo close database.
  });
