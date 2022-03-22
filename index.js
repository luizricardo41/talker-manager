const express = require('express');
const bodyParser = require('body-parser');

const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const validateLogin = require('./middlewares/login');
const createTalker = require('./middlewares/createTalker');
const {
  validateName, validateAge, validateTalk, validateDateAndRate,
} = require('./middlewares/validateData');
const validateToken = require('./middlewares/validateToken');
const modifyTalker = require('./middlewares/modifyTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', validateLogin);

app.post('/talker',
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateDateAndRate,
    createTalker);

app.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDateAndRate,
  modifyTalker);

app.listen(PORT, () => {
  console.log('Online');
});
