//The switch statement evaluates an expression, matching the expression's value against a series of case clauses,
// and executes statements after the first case clause with a matching value, until a break statement is encountered. 
//The default clause of a switch statement will be jumped to if no case matches the expression's value.

let browser = prompt();
switch (browser){
    case "Edge":
        alert("You've got the Edge!");
        break;
    case "Chrome" :    
    case "Firefox" :    
    case "Safari" :    
    case "Opera" : 
        alert("Okay we support these browsers to");
        break;
    default:
        alert("we hope that this page looks ok!");       
}



let a = +prompt("?" , "")


switch(a){
    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2 || 3 :
        alert("2,3")
        break
    default:
        alert("Not found")          

}
//=========================================================================================


// // For loop
// Prime number
let i = 27;
    if(i%2==0 && i%i==0){

        console.log(`${i} it's NOT   prime number`);

    }else{
        console.log(`${i} it's  prime number`);
    }







// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}




// Multiplication table



for(i=2;i<=10;i++){
    console.log(`=================
${i}lik karra jadvali
=================`);
   for(j=1; j<=10;j++){
     console.log(`${i}*${j}=${i*j}`);
   }
}




