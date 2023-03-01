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
pokemonList.forEach(function(list){
    if (list.height > 1){
        document.write(list.name + list.height + ' ( woow, that\s big) ')
    }
    else{
        document.write("<p>" + list.name + list.height + "</p>")
    }
})
// function printArrayDetails (list){
// for (let i=0; i < list.length; i++){
//     if (list[i].height > 1){
//         document.write(list[i].name + list[i].height + ' ( Wow, that\s big! )')
//     }
//     else{
//         document.write("<p>" + list[i].name + list[i].height + "</p>")
//     }
//   }
// };
// printArrayDetails(pokemonList);
// printArrayDetails(pokemonList2);

function divide(dividend, divisor){
    if (divisor === 0){
        return "You\re trying to divide by zero.";
    }
    else {
        let result= dividend / divisor;
        return result;
    }
}
function runThisLater(){
    console.log(divide(12, 2))
}
setTimeout(runThisLater, 5000) // this is a predefind function
// console.log(divide(12,-4))

let inpotName= prompt ('Please enter you name')
console.log(inpotName)
let Accepted = confirm('Do you accept?')
console.log(Accepted)

const myElement = document.getElementById("demo");
myElement.style.color = "red";

// calculator functions:
function add(number1, number2) {
    let result = number1 + number2
    return result
  }
  function subtract(number1, number2) {
    let result = number1 - number2;
    return result;
  }
  function multiply(number1, number2) {
    let result = number1 * number2;
    return result;
  }
  function divide(number1, number2) {
    let result = number1 / number2;
    return result
  }

  let operatorElement = document.querySelector('.operator');
  let operator = "+";
  function calculate() {
    let number1 = parseInt(document.querySelector('#input1').value);
    let number2 = parseInt(document.querySelector('#input2').value);



    let result = 0;
    switch (operator) {
      case "+":
        result = add(number1, number2);
        break;
      case "-":
        result = subtract(number1, number2);
        break;
      case "*":
        result = multiply(number1, number2);
        break;
      case "/":
        result = divide(number1, number2);
        break;
    }
    document.querySelector('.output').innerText = result;
  }
  document.querySelector('#add').addEventListener('click', function () {
    operator = "+";
    operatorElement.value = operator;
  });

  document.querySelector('#sub').addEventListener('click', function () {
    operator = "-";
    operatorElement.value = operator;
  });

  document.querySelector('#mul').addEventListener('click', function () {
    operator = "*";
    operatorElement.value = operator;
  });

  document.querySelector('#div').addEventListener('click', function () {
    operator = "/";
    operatorElement.value = operator;
  });

  document.querySelector('#eql').addEventListener('click', function () {
    calculate();
  });


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