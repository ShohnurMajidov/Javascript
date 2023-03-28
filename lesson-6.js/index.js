let number = 4;
let binary = number.toString(2);
let zeroCount = 0;
let oneCount = 0;

for (let i = 0; i < binary.length; i++) {
  if (binary[i] === '0') {
    zeroCount++;
  } else if (binary[i] === '1') {
    oneCount++;
  }
}
console.log(binary);
console.log(`Number of 0's: ${zeroCount}`);   // Output: Number of 0's: 1
console.log(`Number of 1's: ${oneCount}`);   // Output: Number of 1's: 3


//==================================================


let a = [2,5,6,32,3,21]

let b = Math.max(...a)
let c = Math.min(...a)
let d = Math.abs(b-c)

console.log(d);

//==============================================

function randomFunc(min,max) {
    return  parseInt(Math.random()*(max-min+1))
}

console.log( randomFunc(1,50))