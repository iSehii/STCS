const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const port = process.env.PORT || 3005;
const app = express();
const cors = require('cors');
require('dotenv').config();

const expressListEndpoints = require('express-list-endpoints');

    app.use(cors());
    app.use('/', require('./routes/index'))
    app.use(morgan('dev'));
    console.log(expressListEndpoints(app));

    app.use(bodyParser.json());
    app.use(express.json());

    app.listen(port, () => {
        console.log(`Ejecutando en: http://localhost:${port}`);
    });
