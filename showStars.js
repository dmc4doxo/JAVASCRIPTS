
showStars (20)

function showStars(number){
for (let row=1; row<=number; row++);{
  let patern ='';
    for(let i=0; i<number; i++){
    patern += '*';
    console.log(patern);
    }
}
}