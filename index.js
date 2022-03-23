const express = require('express');

const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const validateLogin = require('./middlewares/login');
const errorHandler = require('./middlewares/errorHandler');

const talkerRoutes = require('./routes/talkerRoutes');

const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', rescue(talkerRoutes));

app.post('/login', validateLogin);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
