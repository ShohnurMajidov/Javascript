
let check = (str1,str2)=>{
  if(str1.indexOf(srt2) == 0 && str1.length == str2.length) {return '100% correct' }
  else if(str1.indexOf(str2) == 1){ return "partly similar"}
  else return 'not similar';
} 
check("olim","oli")

// ==================

let getCount = (str) =>{
  countLetter = {}
   for (let i in str){
      countLetter[str[i]] = 0
  }
//   console.log(countLetter);
  for(j in countLetter){
    for(k in str){
        if(j == str[k]){
            countLetter[j]++
        }
    }
  }console.log(countLetter);
}
getCount('ffsbfs')


//=====================

let count = 13; 

let truncat = (strr)=>{
  return strr.slice(0,count) 
  
}
console.log(truncat('webbrain academy'));


//==================================

let getCurrency = (str)=>{
    return str.slice(1)
}
console.log(getCurrency('$123'));

//========================================

const getCharacter = (str)=> {
   let res = {
    letters : 0 ,
    chars : 0 ,
    numbers: 0,
   }
   for(char of str){
    if(!isNaN(Number(char))){
     res.numbers++
   } else if (char.toUpperCase() == char){
        res.chars++
   }else{
    res.letters++
   } 
 }  
 return res;
};

console.log(getCharacter("12312!@#$vnfdjvnfd"));

//=====================
 