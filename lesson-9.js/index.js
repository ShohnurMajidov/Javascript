
const getData = (sym)=>{
'use strict'
 let date = new Date();
 return `Today is: ${date.getDate()}${sym}${date.getMonth()}${sym}${date.getFullYear()}` 

}
console.log(getData('/'));

//====================

const moment1 = () => {
  return {
    format(symbol) {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let week = date.getDay();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      let nameMonth = [
        "January",
        "Feburary",
        "March",
        "Aprel",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "Noverber",
        "December",
      ];
      let nameDay = [
        "Sunday",
        "Mondey",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      if (symbol === "LT") {
        console.log(`${hours}:${minutes} PM`);
      } else if (symbol === "LTS") {
        console.log(`${hours}:${minutes}:${seconds} PM`);
      } else if (symbol === "L" && month.toString().length < 2) {
        console.log(`0${month}/${day}/${year}`);
      } else if (symbol === "L") {
        console.log(`${month}/${day}/${year}`);
      } else if (symbol === "l") {
        console.log(`${month}/${day}/${year}`);
      } else if (symbol === "LL") {
        console.log(`${nameMonth[month]} ${day}, ${year}`);
      } else if (symbol === "ll") {
        console.log(`${nameMonth[month].slice(0, 3)} ${day}, ${year}`);
      } else if (symbol === "LLL") {
        console.log(
          `${nameMonth[month]} ${day}, ${year} ${hours}:${minutes} PM`
        );
      } else if (symbol === "lll") {
        console.log(
          `${nameMonth[month].slice(
            0,
            3
          )} ${day}, ${year} ${hours}:${minutes} PM`
        );
      } else if (symbol === "LLLL") {
        console.log(
         `${nameDay[week]}, ${nameMonth[month]} ${day}, ${year} ${hours}:${minutes} PM`
        );
      } else if (symbol === "llll") {
        console.log(
          `${nameDay[week].slice(0, 3)}, ${nameMonth[month].slice(
            0,
            3
          )} ${day}, ${year} ${hours}:${minutes} PM`
        );
      }
    },
  };
};

moment1().format("LLLL");




//========================



// const month = [
//    "January",
//    "February",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "October",
//    "November",
//    "December",
// ];

// const week = [
//    "Sunday",
//    "Monday",
//    "Tuesday",
//    "Wednesday",
//    "Thursday",
//    "Friday",
//    "Saturday",
// ];

// const moment = () => {
//    return {
//       format(a) {
//          let date = new Date();
//          let obj = {
//             LT: ${date.getHours()}:${date.getMinutes()} PM,
//             LTS: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM,
//             L: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()},
//             l: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()},
//             LL: ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()},
//             ll: ${month[date.getMonth() + 1].slice(0,3)} ${date.getDate()}, ${date.getFullYear()},
//             LLL: ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM,
//             lll: ${month[date.getMonth() + 1].slice(0,3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM,
//             LLLL: ${week[date.getDay()]}, ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM,
//             llll: ${week[date.getDay()].slice(0, 3)}, ${month[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM,
//          };
//          console.log(obj[a]);
//       },
//    };
// };

// moment().format("LLL");

