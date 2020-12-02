const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);
const breedName = args[0];
console.log(breedName);

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`Description for ${breedName}:${description}`);
  }
});
