


const numbers =[1,2,3,4,5,6];

const output = except(numbers, [1, 2]);

console.log(output);
// Solution logic: There are 3 arrays.  The original. The output and the excluded array.
// Best way is to check every element of the original against the list of excluded.
// If the element is part of the excluded list, do not add it to the new output array.
// in another word, if the element is NOT part of the excluded list, add it to the output.

function except (array, excluded){
    const output = [];
for (element of array)
    if (!excluded.includes(element))  // if element is not included in excepted then add element to the new array output.
    output.push(element);
return output;
}
