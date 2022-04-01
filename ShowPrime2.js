
showPrime (100)

function showPrime(Limit){
for(let number=2; number <=Limit; number++)
    if(isPrime(number)) console.log('Prime:', number);
}

function isPrime(value){
    for (let factor = 2; factor < value; factor++)
        if(value%factor===0) return false;  // itirare all the values here
    
    return true             // Not part of the 'for loop'. if none is found in the if, then it must be Prime
    }