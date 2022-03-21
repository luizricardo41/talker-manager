const fs = require('fs').promises;

const nameFile = 'talker.json';

async function getTalkerById(req, res) {
  const { id } = req.params;
  
  const fileItems = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));

  const searchId = fileItems.find((talker) => talker.id === parseInt(id, 10));
  
  if (!searchId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(searchId);
}

module.exports = getTalkerById;
