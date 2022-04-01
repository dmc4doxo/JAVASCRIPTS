


const numbers =[1,2,3,4,5,6];


const output = move(numbers, 0,-1 );

// Logic: original array and output new array.
// new output array will be original manipulated numbers... element will move according to offset.
// use .splice with count 1 to delete item at index
// use 

console.log(numbers);
console.log(output);

function move (array, index, offset){
const position = index + offset;
if (position >= array.length || position < 0){
console.error('Invalid offset');
return;
}
const output = [...array];  // copy the orignal array to output.
const element= output.splice(index, 1)[0]; // remove the element at index and store it in array at element[0]
console.log(element);
output.splice(position, 0, element);  // 0 means removing no element so you just insert at position. 
return output;                        // Can I use element[0] instead of element? ????
};
