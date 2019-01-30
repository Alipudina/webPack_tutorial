const fishProduct = [
  {species: 'Corvina', weight: 18, pricePerKg: 100}, //index 1
  {species: 'Luvina', weight: 1.6, pricePerKg: 250}, //index 2
  {species: 'Bacalo', weight: 32, pricePerKg: 60}, //index 3
  {species: 'Tuna', weight: 450, pricePerKg: 1000}, //index 4
  {species: 'Tuna', weight: 420, pricePerKg: 1000}, //index 5
  {species: 'Corvina', weight: 21, pricePerKg: 100}, //index 6
  {species: 'Herring', weight: 0.03, pricePerKg: 4}, //index 7
  {species: 'Luvina', weight: 18, pricePerKg: 100}, //index 8
  {species: 'Tuna', weight: 18, pricePerKg: 1000}, //index 9
  {species: 'Luvina', weight: 18, pricePerKg: 100}, //index 10
  {species: 'Bacalo', weight: 18, pricePerKg: 60}, //index 11
   {species: 'Corvina', weight: 23, pricePerKg: 100} //index 12
]


const showCorvinas = fishProduct.filter(fish => fish.species === 'Corvina');
const showLuvina = fishProduct.filter(fish => fish.species === 'Luvina');
const showBacalo = fishProduct.filter(fish => fish.species === 'Bacalo');

const showTuna = fishProduct.filter(fish => {
  return fish.species === 'Tuna'
});


// second way
// const filterFishBySpecies = species => fishProduct.filter(fish => fish.species === species);

// const showCorvinas = filterFishBySpecies('Corvina');
// console.log(showCorvinas);

const removeFish = (fishCollection , typeOfFish, numOfFish = 1) => {
  const findFish = fishCollection.find(fish => fish.species === typeOfFish);
  const indexFish = fishCollection.indexOf(findFish);
  fishCollection.splice(indexFish, numOfFish);
  console.log(fishCollection);
}

removeFish(fishProduct, 'Herring');
