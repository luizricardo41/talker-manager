const fs = require('fs').promises;

const nameFile = 'talker.json';

async function searchTalker(req, res) {
  const { q } = req.query;

  const fileContent = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));
  
  const filterContent = fileContent.filter((talker) => talker.name.includes(q));

  if (!q) return res.status(200).json(fileContent);
  if (!filterContent) res.status(200).json([]);
  return res.status(200).json(filterContent);
}

module.exports = searchTalker;
