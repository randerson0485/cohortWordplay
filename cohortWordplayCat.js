// What are all of the words that contain the word CAT and are exactly 5 letters long?


const fs = require('fs');

// Function to find words containing "cat" and are exactly 5 letters long
function findWordsWithCatAndLength5(text) {
  const words = text.split(/\s+/); // Split by whitespace characters
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.includes('cat') && word.length === 5) {
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

  // Call the findWordsWithCatAndLength5 function on the file content
  const wordsWithCatAndLength5 = findWordsWithCatAndLength5(data);

  // Output the result
  console.log("Words containing 'cat' and are exactly 5 letters long:", wordsWithCatAndLength5);
});
