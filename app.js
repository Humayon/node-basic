const fs = require('fs');

const personDetails = {
  name: 'Kabir',
  email: 'kabir@gmail.com',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh'
  }
};

let data = JSON.stringify(personDetails);

fs.writeFile('./files/dataFile.js', data, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Written successfully');
  }
});
