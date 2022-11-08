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

// let input = "";
// let numInput = "";
// do {
//     input = prompt("What is your name ");
//     // console.log(Number(input));
// }
// while(
//     !isNaN(input)
//     // Number(input) || input == 0
// );
// console.log(input);

// //Template literal.
// // alert("Welcome " + input);
// alert(`welcome ${input}`);

let fruits = ["Apple", "Bananna"];

//add to last element
fruits.push("Orange")
console.log(fruits)

//remove last element
fruits.pop()
console.log(fruits)

//add to first element
fruits.unshift("Mango")
console.log(fruits)

//remove first element of array
fruits.shift(fruits)
console.log(fruits)

// for (let item of fruits)
//     {
//         console(item);
//     }

//     const person -{
//         name: ["bob", "smith"],
//         age: 32,
//         gemder: 'male',
//         interests: ["music", "skiing"],
//     }
// console.log(`My name is ${person.name[0]} . ${person.interest[0]}`

// for (let prop in person)
// {
//     console.log(`my name is ${prop} is ${person[prop]}`)
// }

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
    };
    let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
    };
    let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
    };
let students = [student1, student2, student3];
let counter = 0;
for (let stud of students)
{
    if (stud.program === "CIT" && stud.GPA > 3)
    {
        counter++;
    }
}
console.log(counter);
    