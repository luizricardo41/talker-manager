const fs = require('fs').promises;

const nameFile = 'talker.json';

async function deleteTalker(req, res) {
  const { id } = req.params;
  const fileContent = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));

  const newContentFile = fileContent.filter((talker) => talker.id !== parseInt(id, 10));

  await fs.writeFile(nameFile, JSON.stringify(newContentFile));
  res.status(204).send();
}

module.exports = deleteTalker;