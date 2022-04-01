

const range = arrayFromRange(1,10);

console.log(range[5]);
// console.log(range);
function arrayFromRange(nim, max){
const output=[];     
for (let i=nim; i<=max; i++)
output.push(i);
return output;
}
