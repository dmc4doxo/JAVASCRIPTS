

showNumber(10);

//function showNumber(number){
//for (let i=1; i<(number+1); i++ ){
//if (i%2 === 0) console.log(i, ' EVEN');
//else if (i%2 !== 0) console.log(i, 'ODD');
//else console.log ('I have a bug');
//}
//}

function showNumber(number){   
for (let i=1; i<=(number); i++ ){
const message = (i%2 === 0 ) ? "EVEN" : "ODD";
console.log(i, message);
}
}