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


