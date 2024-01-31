const fs = require('fs');

// Function to find words with all 5 vowels in alphabetical order
function findWordsWithAllVowelsAlphabeticalOrder(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.includes("a") && 
    (word.includes("e") && 
    (word.includes("i") && 
    (word.includes("o") && 
    (word.includes("u") 
    ))))) {
      result.push(words[i]);
    }
  }

  // Sort the result array alphabetically
  const sortedResult = result.sort();

  return sortedResult;
}

// Read the content of the text file
const filePath = 'sowpods.txt';  

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Call the findWordsWithAllVowelsAlphabeticalOrder function on the file content
  const wordsWithAllVowelsAlphabeticalOrder = findWordsWithAllVowelsAlphabeticalOrder(data);

  // Output the result
  console.log(wordsWithAllVowelsAlphabeticalOrder);
});
