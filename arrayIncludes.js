

const numbers =[1,2,3,4,5,6];
console.log (includes(numbers,5));

function includes (array, searchElement){
    for (key of array)
        if (key === searchElement) return true;  
        else return false;
     };
         
 
