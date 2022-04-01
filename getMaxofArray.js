

const numbers =[1 , 2, 3, 4, 10];

const max = getMax(numbers);
console.log(max);

//function getMax(array){
//return Math.max(...numbers);  // why do you have to spread numbers... if not, you get NaN.
//}                             // when you spread, it converts array to a list???? [1, 2, 3,] become (1, 2, 3)

// function getMax(array){
//    if (array.length===0) return undefined;
//    let max = array[0]
//    for(i=1; i<array.length; i++)
//        if(array[i]>max) max = array[i];
//    return max;
// }
//
//
//

// Reduce Method -- the long way
// function getMax(array){
// if (array.length===0) return undefined;
// 
// return array.reduce((accumulator, current) => {
//     return (current > accumulator) ? current : accumulator ;
// });
// }

// Final reduction with a & b.  There are 2 returns. 1 for the reduce funtion and 1 for the back function
// function getMax(array){
//    if (array.length===0) return undefined;
// return array.reduce((a,b)=>{
//    return (a>b)? a: b});
// }

// Further reduced by removing the {}
function getMax(array){
    if (array.length===0) return undefined;
return array.reduce((a,b)=>a>b? a: b);
}
