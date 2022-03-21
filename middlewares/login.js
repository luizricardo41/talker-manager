function validateLogin(req, res) {
  const { email, password } = req.body;
  const validEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const test = validEmail.test(email);
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  
  if (test === false) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return res.status(200).json({ token: '7mqaVRXJSp886CGr' });
}

module.exports = validateLogin;
