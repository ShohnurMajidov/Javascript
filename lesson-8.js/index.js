let res = 0;
let arr = [1,2,3,4] 
 arr.forEach((value)=>
 res += value  
)

console.log(res)



//========================

let arr1 = ['webbrain', 'academy']

let count = {}
 
arr1.forEach(arr1=>{
    arr1.split('').forEach(char=>{
      if(char in count){
        count[char]++;
      }else{
        count[char] = 1;
      }
     } );
    });
console.log(count);


//==================
let str = "-webbrain-academy";

str = str.replace(/-([a-z])/g, function (gp) {return gp[1].toUpperCase(); })
str = str.charAt(0).toUpperCase() + str.slice(1);

console.log(str);


//========================

let users = [
    {id:1 , year: 1998, engine:1, name:"Tico"},
    {id:2 , year: 2006, engine:1.2, name:"Matiz"},
    {id:3 , year: 2018, engine:2.2, name:"Tracker"},
    {id:4 , year: 1996, engine:1.6, name:"Nexia"},
    {id:5 , year: 2015, engine:2.5, name:"Malibu"},
    {id:6 , year: 2004, engine:1.2, name:"Damas"},
    {id:7 , year: 2012, engine:1.5, name:"Cobalt"},
]

let updateValue = (data)=>{
  let res = users.map((value)=>(value.id === data.id ? data : value ));
  users = res ;
}

updateValue({id:2 , year: 2000, engine:1.2, name:"Olim"})

console.log(users);




// let a =  {status:"eski"} 
// let b =  {status:"o'rta"}
// let c =  {status:"yangi"} 


// let sort = users.filter((value)=>{  
//     if(value.year < 2000){
//       return users[value] = a
//     }else if(value.year < 2010){
//       return  users[value] = b
//     }else {
//       return  users[value] = c
//     }
    
//   })
  
//   console.log(sort);

//   let ress = users.filter((value)=>{
//   return value.year < 2000;
// })

// console.log(ress);



// let sort = users.sort((a,b)=>{  
//   return    a.engine-b.engine
// })

// console.log(sort);


// let sort = users.sort((a,b)=>{  
//     return  a.name.localeCompare(b.name)
//   })
  
//   console.log(sort);

//============================






