// Create callback functions for Higher-Order Functions:
const logEachValue = (arr) => {
  arr.forEach((element, index) => {
    console.log(`Value: ${element}, index: ${index}.`);
  });
  
};

const makePeopleHappy = (people) => {
  people.forEach((person) => {
    return person.isHappy = true;
  });
};

const getEvenNumbers = (numbers) => { 
  return numbers.filter((number) => {
     return number % 2 === 0;
  });
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

const myMap = (arr, callback) => { 
  const emptyArr = [];
  for(let i=0;i<arr.length;i++){
    emptyArr.push(callback(arr[i], i, arr))
  }
  return emptyArr
};

const myFilter = (arr, callback) => { 
  const emptyArr = [];
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i])){
      emptyArr.push(arr[i])
    } else continue;
  }
  return emptyArr;
};

const myFind = (arr, callback) => { 
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i])){
      return arr[i]
    }
  }
};

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
