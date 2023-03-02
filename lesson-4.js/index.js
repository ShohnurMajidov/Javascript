// Rewrite the code changing the for loop to while 

// for(let i = 0; i<3 ; i++){
//     console.log(`number ${i}!`);
// }

let i = 0
while(i<3){
    console.log(i);
    i++
}

// ============================


function checkAge(age) {
    if (age>18) {
        return true;
    }else{
        return console.log("Did parents allow you?");
    }
}
checkAge()

//rewrite the function using "?" or "||"

function checkAge(age) {
    age>18 ? console.log("allow") : console.log("Did parents allow you?");

}
checkAge(21)


// ======================================
//write a function min(a,b) which returns the least of two numbers a and b

function minValueGet(a,b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
}

console.log(minValueGet(5,4));


function minValueGet(a, b) {
    return a < b ? a : b;
  }

console.log(minValueGet(2,6));

//===========================

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}


//==============================

