function validateName(req, res, next) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
} 

function validateAge(req, res, next) {
  const { age } = req.body;

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
}

function validateTalk(req, res, next) {
  const { talk } = req.body;
  
  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    return res.status(400)
      .json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
  }
  next();
}
 
function validateDateAndRate(req, res, next) {
  const { talk: { watchedAt, rate } } = req.body;
  const validDate = /^(0[1-9]|[12]\d|3[01])[/\-.](0[1-9]|1[0-2])[/\-.](19|20)\d{2}$/gm;
  const test = validDate.test(watchedAt);
  if (!test) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
}

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateDateAndRate,
};
