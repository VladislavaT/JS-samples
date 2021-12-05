/*Task#1
function which returns max even element in array from array of strings*/
//Math.max(...arr.filter(num => num % 2 ===0))
function getMaxEvenElement(arr) {
    return arr.reduce((res, num) => num % 2 === 0 && num > res? num: res, 0)
}
/*let arr = ['1', '2', '3', '4', '5']
console.log(getMaxEvenElement(arr));*/


/*Task#2
 Write a code which swap variables values without a temporary variable
• Please, use destructuring assignment*/

function swap (a, b) {
    [a,b] = [b,a];
    return `${a} ${b}`;
}
//console.log(swap(5,3));

/*Task#3
a function which simply return value when there is some defined value 
passed and empty text string ‘-‘ when it is not defined*/

let getValue = (element) => element ?? '-'

/*console.log(getValue(0)); //0
console.log(getValue(4)); //4
console.log(getValue('someText')); //someText
console.log(getValue(null)); // -
console.log(getValue(undefined)); // -*/

/*Task#4
Create a function which return objects from array of arrays.*/
let getObjFromArray = (arr) => Object.fromEntries(arr);

/*const arr = [
    ['name', 'dan'],
    ['age', '21'],
    ['city', 'lviv']
];

console.log(getObjFromArray(arr));*/

/*Task#5
function to enhance element with unique id. 
• Use Symbol() as a unique identifier*/

 function addUniqueId(obj) {
    return { ...obj, id: Symbol() }
}
/*
const obj = {name:'nick'}
console.log(addUniqueId(obj)) //{ name: 'nick', id: Symbol() }
console.log(addUniqueId({name:'buffy'})) //{ name: 'buffy', id: Symbol() }

console.log(Object.keys(obj).includes('id')) //false
*/

/*Task#6
function which regroups object properties
• Destruct old object and construct new*/
function getRegroupedObject(obj) {
    let { 
        name,
        details: {
            id,
            age,
            uni
        }
    } = obj 
    return {
        uni,
        user: {
            age,
            name,
            id
        }
    }
}
/*
const oldObj = {
    name:'willow',
    details: {
        id: 1,
        age: 47,
        uni: 'LNU'
    }
};
console.log(getRegroupedObject(oldObj))*/

/*Task#7
function which finds unique elements in array
• Use one of the new data types*/
let getArrayWithUniqeElements = (arr) => Array.from(new Set(arr));

/*const arr = [2, 3, 4, 2, 4, 'a', 'c', 'a']
console.log(getArrayWithUniqeElements(arr))*/

/*Task#8
function which masks phone number, leaves only last 4 digits
• Use padStart*/
let hideNumber = (userNum) => userNum.slice(6,10).padStart(10, '*');
/*
const phoneNumber = '0123456789'
console.log(hideNumber(phoneNumber)) //******6789*/

/*Task#9
function which has all parameters always required
If they are not - throw error
• Use default parameters feature and assign a function to it*/
function throwError() {
    throw new Error('b is not required');
}
function add(a, b = throwError()) {
    return a + b;
}
/*
console.log(add(2,3))
console.log(add(3)) //throw err*/

/*Task#10
Use generator function to create an iterable sequence of values*/

 function* generatorIterableSquence () {
    yield 'I',
   yield 'Love',
   yield 'JS'
}

const generatorObject = generatorIterableSquence();

for(let val of generatorObject) {
    console.log(val)
}