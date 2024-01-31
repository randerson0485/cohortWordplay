// What are all of the words with no vowel and not even a Y?

const fs = require('fs');

// Function to find words with no vowels (A, E, I, O, U) or the letter 'y'
function findWordsWithoutVowelsOrY(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (!/[aeiouy]/.test(word)) {
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

  // Call the findWordsWithoutVowelsOrY function on the file content
  const wordsWithoutVowelsOrY = findWordsWithoutVowelsOrY(data);

  // Output the result
  console.log(wordsWithoutVowelsOrY);
});
