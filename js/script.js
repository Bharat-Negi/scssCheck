console.log('hello');

var firstName = 'John';
let lastName = 'Doe';
let age = 30;
const isMarried = true;
const birthDate = 1990;
const cardNumber = '7856';

// const birthDate = new Date('1990-01-01');

// alert() show undefined
// confirm() Boolean

const bigName = 'This is ' + firstName + ' ' + lastName + ' I am ' + age + ' years old';
var x = Math.floor("1000.01"); // floor() automatically converts string to number
console.log(x);

console.log(birthDate);
console.log('This is ' + firstName + ' ' + lastName + ' I am ' + age + ' years old and I am ' + isMarried);
console.log(firstName[0]);
console.log(cardNumber.padStart(16, 'X'));
console.log(cardNumber.padEnd(16, '*'));
console.log(bigName.split(' '));


let i = 0;
const changeName = ['Bharat', 'Rahul', 'Aahana', 'Aarav'];
function changeNameFunc() {
    if (i >= changeName.length) {i = 0};
    console.log(changeName[i]);
    document.getElementById('changeName').innerHTML = changeName[i];
    i++;
}