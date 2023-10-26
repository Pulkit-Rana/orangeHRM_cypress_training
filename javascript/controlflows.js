// coding someting
//....
//....

// Logical Operator OR ||

// if (10 < 5 || 10 > 20) {
//     console.log("here")
// }
// else {
//     console.log("Not in if")
// }

// // Ternary Operators
// //condition ? a : b

// let price = 10.5;
// let day = "wednesday";

// day === "monday" ? price -= 1.5 : price += 1.5
// console.log(day)
// console.log(price)

// //Logical Operator &&

// if (10 > 5 && 10 > 20) {
//     console.log("returns true")
// } else {
//     console.log("returns false")
// }

// switch Statement
const food = "pizza"

switch (food) {
    case 'fruit chaat':
        console.log("This is not the desired food: Fruit Chaat")
        break; // take a step forward
    case 'pizza':
        console.log("This is not the desired food: Pizza")
        break;
    default:
        console.log("Sorry No Salad Found")
}

// if/else Statement
const ismailSent = true;

if (ismailSent) {
    console.log("Mail Sent")
}

console.log("This will run anyways!!!")


//else if

const size = 1000

if (size > 100) {
    console.log("Big");
}
else if (size > 20) {
    console.log("medium")
}
else if (size > 10) {
    console.log("small")
}
else{
    console.log("Size Not found")
}
// Logical Operator !

const ismailSent1 = false;

if (!ismailSent1) {
    console.log("Mail Sent")
}

console.log("This will run anyways!!!")