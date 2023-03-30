
let reeas  = 1
let multiple = (number) => {
    if(number == 1) return reeas*= 1
    else{
        reeas *= number
        multiple(number-1) 
    }
}
console.log (reeas);

multiple(3)

//=========================

let summ = 0;
const sum = (n) => {
    if (n === 1) 
    return summ+1;
    else summ += n   
    return  sum(n - 1)
}

sum(4)
console.log(summ);

//============================

function calculateSum(n) {
    let fibo = [];
    if (n <= 0)
        return 0;

    fibo[0] = 0;
    fibo[1] = 1;

    // Initialize result
    let sum = fibo[0] + fibo[1];

    // Add remaining terms
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] +
            fibo[i - 2];
        sum += fibo[i];
    }
    return sum;
}

//=======================================
// Functions in javascripts are First Class Functions
// Functions are like objects
// sum(1)(2)(3).. (n)

// Fist consider it like a function sum(1)(2)() which is called and gives output 3
let sum1 = function (a) {
    // Sum again gives a function which can be executed by passing an argument inside it let's call it b
    return function (b) {
        return a+b
    }
  }
  
  // Now consider it like a function sum(1)(2)(3)() which is called and gives output 6
  let sum2 = function (a) {
    return function (b) {
      return function (c) {
        return a+b+c;
      }
    }
  }
  
  
  // We can see a clear pattern, will solve it recursively
  const sum3  = function (a) {
    return function (b) {
      if (b) {
        return sum(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  };
  
  
  console.log(sum(1)(2)()); //3
  console.log(sum(1)(2)(3)(4)()); //10