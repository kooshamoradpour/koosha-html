let pokemonList = [
    {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
    },
    {
        name: 'Pikachu',
        height: 0.4,
        type: ['Electric']
    },
    {
        name: 'Jynx',
        height: 1.4,
        type: ['Psychic', 'ice']
    }
];
let pokemonList2 = [
    {
        name:'Lion',
        height: 1,
        type: ['bite', 'run']
    },
    {
        name: 'tiger',
        height: 2.5,
        type:['killer', 'slow']
    },
    {
        name: 'beer',
        height: 0.9,
        type: ['climbing', 'funy']
    }
];
function printArrayDetails (list){
for (let i=0; i < list.length; i++){
    if (list[i].height > 1){
        document.write(list[i].name + list[i].height + ' ( Wow, that\s big! )')
    }
    else{
        document.write("<p>" + list[i].name + list[i].height + "</p>")
    }
  }
};
printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);

function divide(dividend, divisor){
    if (divisor === 0){
        return "You\re trying to divide by zero.";
    }
    else {
        let result= dividend / divisor;
        return result;
    }
}
console.log(divide(12,-4))

const myElement = document.getElementById("demo");
myElement.style.color = "red";


// if/else/else is practice
// let day= "Saturday"
// if (day === 'Saturday' || day === 'Sunday') {
//     console.log('It\s weekend! Yay')
// }
// else {
//     console.log("It's not the weekend!boow!")
// }
// let age= 19;
// let result= age>20 ? 'Its not a teen' : 'Is a teen';
// console.log(result)

// for loop practice
// for (let i = 1; 1 <= 100; i++) {
//     console.log(i)
// }

// while/ do...while loop
// let i=1;
// while ( i < 5) {
//     console.log(i)
//     i++
// }
// let b= 3;
// do {
//     console.log(b);
//     b++
// }
// while(b<=10)