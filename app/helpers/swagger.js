const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swagger: v1SwaggerDocs } = require('../v1/swagger');

const router = express.Router();

router.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(v1SwaggerDocs));

module.exports = router;
