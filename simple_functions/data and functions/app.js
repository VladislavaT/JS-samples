/*
Write	a	JavaScript	function	that	reverse	an	integer number.
reverseNumber(12345) // returns 54321
reverseNumber(-56789) // returns -98765*/
function reverseNumber(num){
    let numStr = num + '';
    let reverse = '';
    let sign = 1;
    if (num<0){ 
        numStr = numStr.substring(1);
        sign =-1;
    } 
    for(let i = numStr.length -1; i>=0; i--){
        reverse += numStr.charAt(i);  
 }
    return reverse * sign;
}

/*
2.Write	function,	which	iterates	over	array	and	executes	function	on	each	element.
forEach([2,5,8], function(el) { console.log(el) }) // logs to console: 2 5 8*/
function forEach(arr, func) {
    for (let i of arr) {
        func(i);
    } 
}

/*	 Write	 function,	 which	 returns	 transformed	 array	 based	 on	 function,	 which	 is	 passed	 as	 a	
parameter.
map([2, 5, 8], function(el) { return el + 3; }) // returns [5, 8, 11]
map([1, 2, 3, 4, 5], function (el) { return el * 2; }) // returns [2, 4, 6, 8, 10]
reuse	function	from	task	2*/
function map(arr, func) {
   let mapArr = [];
   forEach(arr, i => mapArr.push(func(i)));
   return mapArr;
}

/*
Write	function,	which	returns	filtered	array	based	on	function,	which	passed	as	a	parameter
filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 }) // returns [5, 8, 6]
filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 }) //returns [4, 6, 8, 10]
reuse	function	from	task	2*/
function filter(arr, func) {
    let res = [];
    forEach(arr, function(i){
        if(func(i)){
            res.push(i); 
        }
    });
        return res;
}


/*Write	 function,	which	returns	array	of	names	of	people,	who	are	over	18	and	 their	 favorite	
fruit	is	apple.
reuse	functions	from	task	3 and	4*/
function getAdultAppleLovers(data) {
    let filtArr = filter(data, function(el) {
        return el.age >= 18 && el.favoriteFruit === 'apple'
    });
    let namesArr = map(filtArr, function(el){
        return el.name;
    });
    return namesArr;
}

//Write	function,	which	returns	array	of	keys	of	an	object.
function getKeys(obj){
    const keyArr = [];
    for (let key in obj){
        if(key){
            keyArr.push(key);
        }
    }
    return keyArr;
}
//	Write	function,	which	returns	array	of	values	of	an	object
function getValues(obj) {
    const valArr = [];
    for(let value in obj){
        if(value){
            valArr.push(obj[value]);
        }
    }
    return valArr;
}

//Write	function,	which	returns	formatted	date.
//showFormattedDate(new Date('2018-08-27T01:10:00'))
 returns `It is 27 of Aug, 2018`
function showFormattedDate(dateObj) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let month = monthNames[dateObj.getMonth()]
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    return `It is ${date} of ${month}, ${year}`;
}

/*--------------------------------------------------------------------*/
/*Task #1
Write a function - isEquals
It should accept two arguments and returns true if first one value equals second one or false
otherwise.*/
let isEquals = (a, b) => a===b;

/*Task #2
Write a function - isBigger
It should accept two arguments and returns true if first one has greater value than second one or 
false otherwise*/
let isBigger = (a, b) => a > b;

/*Write a function - storeNames
It should accept an arbitrary number of strings and return an array of that strings*/
let storeNames = (...args) => args;


/*Task #4
Write a function - getDifference
It should accept two arguments as numbers and return their difference. But the function never 
returns a negative value. If second parameter is greater than first one, function will change their 
order.*/
function getDifference(a, b){
    let diff = a<b? b - a: a-b;
    return diff;
}

/*Task #5
Write a function - negativeCount
It should accept an array of numbers and return the count of negative values from the array.*/
function negativeCount(arr){
    let countNeg = 0;
    arr.forEach((el) => {
        if(el<0){
            countNeg ++;
        }
    });
    return countNeg;
}

/*Task #6
Write a function – letterCount
It accepts two string arguments and returns an integer of the count of occurrences the 2nd 
argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.*/
function letterCount(str1, str2){
    return str1.toLowerCase().split(str2.toLowerCase()).length-1;
}

/*Task #7
Our basketball team (x – our team) completed the championship. The result of each match look like 
"x:y". 
Results of all matches are recorded in the collection like this: ["95:74", "107:107", "99:110", ...]
Write a function – countPoints
It should accept a collection of football games scores and count the points of our team in the 
championship. 
Rules for counting points for each match:
• if x > y - 3 points
• if x < y - 0 point
• if x = y - 1 point*/
function countPoints(arr){
    const three = 3;
   return arr.reduce((points, arr) => {
        const [x,y] = arr.split(':').map(Number); // '100:90' => ['100', '90']
        x>y? points +=three: points+=0; //if x > y - 3 points  if x < y - 0 point
        x ===y? points +=1:points+=0; //if x = y - 1 point
        return points;
    }, 0); //initial zero 
}
