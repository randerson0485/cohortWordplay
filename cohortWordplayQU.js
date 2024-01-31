// What are all of the words containing a Q but not a U?
const fs = require('fs');

// Function to find words containing "q" but not followed by "u"
function findWordsWithQNotU(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.includes('q') && !word.includes('u')) {
      result.push(words[i]);
    }
  }

  return result;
}

// Read the content of the text file
const filePath = 'sowpods.txt';  

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Call the findWordsWithQNotU function on the file content
  const wordsWithQNotU = findWordsWithQNotU(data);

  // Output the result
  console.log(wordsWithQNotU);
});
