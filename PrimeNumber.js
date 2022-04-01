

showPrime (100)

function showPrime(Limit){
for(let number=2; number <=Limit; number++){
    let isPrime = true;
    for (let factor = 2; factor < number; factor++){
        if(number%factor===0){
        isPrime=false;
        break;}
        }
    if (isPrime) console.log('Prime', number);
    }
}
