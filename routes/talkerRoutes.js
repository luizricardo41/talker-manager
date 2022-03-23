const express = require('express');

const getTalkers = require('../middlewares/getTalkers');
const getTalkerById = require('../middlewares/getTalkerById');
const createTalker = require('../middlewares/createTalker');
const {
  validateName, validateAge, validateTalk, validateDateAndRate,
} = require('../middlewares/validateData');
const validateToken = require('../middlewares/validateToken');
const modifyTalker = require('../middlewares/modifyTalker');
const deleteTalker = require('../middlewares/deleteTalker');
const searchTalker = require('../middlewares/searchTalker');

const router = express.Router();

router.get('/', getTalkers);

router.get('/search', validateToken, searchTalker);

router.get('/:id', getTalkerById);

router.post('/',
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateDateAndRate,
    createTalker);
    
router.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDateAndRate,
  modifyTalker);

router.delete('/:id', validateToken, deleteTalker);

module.exports = router;
