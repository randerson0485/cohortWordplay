// How many words contain the substring "TYPE”?

const fs = require('fs');

// Function to find words containing the substring "type"
function findWordsWithSubstringType(text) {
  const words = text.split(/\s+/); // Split by spaces
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (word.includes("type")){
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

  // Call the findWordsWithSubstringType function on the file content
  const wordsWithSubstringType = findWordsWithSubstringType(data);

  // Output the result
  console.log("Words containing the substring 'type':", wordsWithSubstringType);
});
