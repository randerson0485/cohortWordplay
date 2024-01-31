const fs = require('fs');

function findWordsWithQNotU(text) {
  const words = text.split(/\s+/);
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.includes("uu")) {
      result.push(words[i]);
    }
  }

  return result;
}

const filePath = 'sowpods.txt';  

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsWithQNotU = findWordsWithQNotU(data);

  console.log("Words containing 'q' but not followed by 'u':", wordsWithQNotU);
});
