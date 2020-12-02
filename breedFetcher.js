const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
  
  if (error) {
  callback(error,null);
  }
  const data = JSON.parse(body);
  
  
      let ans = data[0];
      if (ans.length < 1) {
        callback(error, "no description");
      } 
      for (let item of data) {
        if (item.name === breedName) {
          ans = item.description;
        }
      }
      callback(error, ans);
      

  });
}


module.exports = { fetchBreedDescription };

