const fs = require('fs').promises;

const nameFile = 'talker.json';

async function modifyTalker(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const fileContent = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));

  const searchId = fileContent.find((talker) => talker.id === parseInt(id, 10));
  const newContentFile = fileContent.filter((talker) => talker.id !== parseInt(id, 10));

  const newDataTalker = {
    ...searchId, name, age, talk,
  };

  newContentFile.push(newDataTalker);
  await fs.writeFile(nameFile, JSON.stringify(newContentFile));
  res.status(200).json(newDataTalker);
}

module.exports = modifyTalker;
