
// Testing to see if all element of array are positive.
const numbers =[5,2,1,-3,4,-1,-10,-6,0,8];

// Get new array with only the positive numbers.

// positiveArray(numbers);
// console.log(output);  // why this won't work. undefined 'newArray'

// function positiveArray(array){
// const newArray=[];
//for (element of array)
//   if (element >=0) newArray.push(element);
// return newArray;
//}

// This works!!!
;
// console.log(positiveArray(numbers));

const allPositive = numbers.filter((value)=>(value>=0));
console.log(allPositive);
