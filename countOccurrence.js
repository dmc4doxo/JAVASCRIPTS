

const numbers =[1 , 2, 3, 1, 4, 5, 6,4,4,4,6];

const count = countOccurences(numbers,6);

console.log(count);

// Reduce implementation:
function countOccurences(array, searchElement){
return numbers.reduce((accumulator, current)=>{
    const occurence =(current === searchElement) ? 1 : 0;
    return (accumulator + occurence);
}, 0);
}

// Basic implementation:

// function countOccurences(array, searchElement){
// let count = 0;
// for(let element of array){
//  if(element === searchElement)
//  count++;
// }
// return count;
// }

 // numbers.reduce((accumulator, currentvalue)=>{return (accumulator + currentvalue)}, 0);
// 
