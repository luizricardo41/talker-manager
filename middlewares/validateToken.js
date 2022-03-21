function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization !== '7mqaVRXJSp886CGr') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
}

module.exports = validateToken;
