// What are all of the words that have no E or A and are at least 15 letters long?


const fs = require('fs');

// Function to find words without 'E' or 'A' and at least 15 letters long
function findWordsWithoutEorA(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (!word.includes('e') && !word.includes('a') && word.length >= 15) {
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

  // Call the findWordsWithoutEorA function on the file content
  const wordsWithoutEorA = findWordsWithoutEorA(data);

  // Output the result
  console.log(wordsWithoutEorA);
});
