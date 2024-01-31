// Create and print an array containing all of the words that end in "GHTLY"

const fs = require('fs');

// Function to find words that start and end with the letter "y"
function findWordsStartAndEndWithY(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.endsWith('ghtly')) {
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

  // Call the findWordsStartAndEndWithY function on the file content
  const wordsStartAndEndWithY = findWordsStartAndEndWithY(data);

  // Output the result
  console.log(wordsStartAndEndWithY);
});
