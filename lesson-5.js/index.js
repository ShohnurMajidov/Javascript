//Write the code , one line for each action; 
let user = {
    name : "John",
    surname:"Smith"
}

user.name = "Pete" ;
console.log(user);
delete user.name;
console.log(user);



//=================================================

let obj ={
  id : 1,
  name : "webbrain"
}  

for(let i in obj){
  console.log(i);
}
//===============================================

let obj1 ={
  id : 1,
  name : "webbrain"
} 

for(let i in obj1){
  if(typeof obj1[i] == 'number')
  
  console.log(i);

}
//===============================


let objj ={
  id : 1,
  name : "webbrain",
  offline:true,
  online:true,
  individual:false
} 

for(let i in objj){
  if(typeof objj[i] == 'boolean')
   console.log(`${i}:${objj[i]}`);
}




//===============================================
let objj1 ={
  id : 1,
  name : "webbrain",
  offline:true,
  online:true,
  individual:false
} 

for(let i in objj1){
  if(typeof objj1[i] == 'string')
  console.log(`${i}:${objj1[i]}`);
}




//===============================================

let obj3 = {
  
  
}

let isEmpty = (obj3)=>{
   for(let i in obj3){
    return false
  }
  return true
}
console.log(isEmpty(obj3));


// ==================================


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum); // 390


  //=========================


  let menu ={
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiply(menu) {
    for(let i in menu){
      if(typeof menu[i] == 'number'){
        menu[i] *= 2
      }
    }
  }
  
  multiply(menu)

  console.log(menu);


  //==============================================
 
 
 
  function makeUser() {
    return {
      name : "John",
      ref :this
    };
  }

  let user = makeUser()

  console.log(user.ref.name)



  //==============================================
  //Create a constructor function Calculator that creates objects with 3 methods:

//read() prompts for two values and saves them as object properties with names a and b respectively.
//sum() returns the sum of these properties.
//mul() returns the multiplication product of these properties.

function Calculator() {

  this.read = function() {
    this.a = 4;
    this.b = 6;
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}
//  Calculator.read();


let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() )
console.log( "Mul=" + calculator.mul() );

//=============================================





