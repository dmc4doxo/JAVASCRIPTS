



console.log(('Sum of muliple of 3 and multiple of 5 is'), sumOf(100));

function sumOf(Limit){
    let sum = 0;
for(i=0; i<=Limit; i++) {
if ((i%3===0) || (i%5===0)) sum = (sum+= i);
else sum = sum;
}
return sum;
}

//Below was written originally by Mack.  Compressed by instructor, above.

// sumOf(100);
//function sumOf(Limit){
//    let sum = 0;
//for(i=0; i<=Limit; i++) {
//if (i%3===0) {sum = (sum + i);
//console.log('Got a 3', i)}
//else if (i%5===0) {sum = (sum +i);
//console.log('Got a 5', i)}
//else sum = sum;
//
//}
//console.log("Sum of multiple of 3 and multiples of 5 is :", sum);
//}
