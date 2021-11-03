const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('1.breedDetailsFromFile: Calling readFile...');
  //async function
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("3.In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};
// callback
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => print out details correctly.
};

breedDetailsFromFile('Bombay', printOutCatBreed);