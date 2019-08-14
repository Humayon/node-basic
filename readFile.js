const fs = require('fs');

fs.readFile('./files/dataFile.js', (err, data) => {
  if (err) {
    return console.log(err);
  }
  let readData = JSON.parse(data);
  console.log(readData.address);
});
