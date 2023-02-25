if("0"){
    alert("Hello");
}else{
    alert("goodbye")
}
//The reason why "hello" comes out is "0" true



let whatIsName = prompt('What is the "official" name of JavaScript')

if (whatIsName == "ECMAScript"){
    alert("Right!")
}else{
    alert(`You don't know?
 "ECMAScript"!`)
}

// ================================================


let x = 0;

if(x >= 1){
    console.log("value is greater than zero");
}else if(x == 0){
    console.log("value is equals zero");
}else if(x <= -1){
    console.log("value is less one");
}else{
    console.log("not found");
}

//====================================================

let a = 1;
let b = 2;
let result;
a+b<4 ? result = "Below" : result = "Over"
console.log(result);


//=======================================================

let login = "";
let message;

login == "Employee" ? message = "hello" :
login == "Director" ? message = "Greetings" :
login == "" ? message = "No login" : message = "";

console.log(message);