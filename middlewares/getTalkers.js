const fs = require('fs').promises;

const nameFile = 'talker.json';

async function getTalkers(_req, res) {
  const fileItems = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));
  
  res.status(200).json(fileItems);
}

module.exports = getTalkers;
