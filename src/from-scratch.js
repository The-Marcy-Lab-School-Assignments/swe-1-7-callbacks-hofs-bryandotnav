// Create callback functions for Higher-Order Functions:
const logEachValue = (arr) => {
  if(arr.length <= 0){
    return arr;
  }
  for(let i=0;i<arr.length;i++){
    console.log(`Value: ${arr[i]}, index: ${i}.`)
  }
};

const makePeopleHappy = (people) => {
 for(let i=0;i<people.length;i++){
  let currentMood = people[i];
  currentMood.isHappy = !currentMood.isHappy
 }
 console.log(people)
};

const getEvenNumbers = (numbers) => { 
  const arr1 = [];
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      arr1.push(numbers[i])}
  };
  return arr1;
};


const doubleEveryNumber = (numbers) => {
  const doubled = numbers.map((num)=>{
    return num * 2;
  });
  return doubled;
 };

const convertToBooleans = (arr) => { 
 const convert = arr.map((el)=>{
  return Boolean(el);
 });
 return convert;
};


// Create your own Higher Order Functions:
const myForEach = (arr, callback) => { 
  for(const value of arr){
    callback(value)
  }
};

const myMap = (arr, tranform) => { };

const myFilter = () => { };

const myFind = () => { };

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};
