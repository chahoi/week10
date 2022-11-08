// alert("The rest of the page wouldn't load until you reeeeeeeeeee");

// for (let i =2; i<=1024; i = i*2) {
//     console.log(i)
// }

// while (i <= 1024 i) {
//     console.log(i);
// }

// do {
//     i = 2;  
//     i = i*2;
// } while(i <= 1024);
// console.log(i)

let input = "";
let numInput = "";
do {
    input = prompt("What is your name ");
    // console.log(Number(input));
}
while(
    // !isNaN(input)
    Number(input) || input == 0
);
console.log(input);