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

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 1){
        document.write ('Wow, that\s big!')
    }
    document.write(pokemonList[i].name + pokemonList[i].height)
}

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