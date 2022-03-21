const fs = require('fs').promises;

const nameFile = 'talker.json';

async function createTalker(req, res) {
  const { name, talk, age } = req.body;
  
  const fileItems = await fs
    .readFile(nameFile, 'utf-8')
    .then((data) => JSON.parse(data));
  
    const newItem = {
      id: fileItems.length + 1,
      name, 
      age,
      talk,
    };
  
  fileItems.push(newItem);

  await fs.writeFile(nameFile, JSON.stringify(fileItems));
  return res.status(201).json(newItem);
}

module.exports = createTalker;
