/*Write a function that accepts a person's date of birth as an input and returns the person's exact age 
today.
For the sake of the task, let’s assume that the input is always a valid date object.*/
function getAge(inputDate){
  const today = new Date();
  let birthday = new Date(inputDate); 
  let age = today.getFullYear() - birthday.getFullYear();
  return today.setFullYear('1972') < birthday.setFullYear('1972') ? age - 1 : age;
}

/*Write a function that accepts a date/timestamp and returns a textual representation of the corresponding
weekday (i.e. 'Monday', 'Tuesday', etc.).
For the sake of the task, let’s assume that the input is always a valid 
date object or a timestamp*/
let getWeekDay = (inputDate) => new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(inputDate);

// Write a function that will return the number of days until the New Year.
function getAmountDaysToNewYear(){
    let leapYear = 366,
        yearNleap =365,
        daysTo,  
        currentDay = new Date(),
        newYear = new Date(currentDay.getFullYear(), 0, 1);
    const dayMilliseconds = 86400000;
    if (currentDay.getMonth() === 0 && currentDay.getdate() > 1){  
         newYear.setFullYear(newYear.getFullYear() + 1);   
    }   
    daysTo = Math.round(newYear.getTime() - currentDay.getTime()) /dayMilliseconds;    
    let year = currentDay.getFullYear%yearNleap ? leapYear : yearNleap;  
    daysTo = year + Number(daysTo.toFixed(0));
    return daysTo;  
}

/*Write a function that accepts a year as a number and returns the date of Programmer’s Day in the year 
specified. The return value should be a string in the following format: ‘DD Mon, YYYY (weekday)’. Reuse the 
function from the task 2. The Day of the Programmer is celebrated on the 256th day of each year (on 
September 13 during common years and on September 12 in leap years)*/
function getProgrammersDay(year){
  let day = new Date(year, 0, '256');
  let weekDay = getWeekDay(new Date(day));
  return `${day.getDate()} Sep, ${year} (${weekDay})`;
}

/*Write a function that accepts a weekday as a string (e.g. ‘Sunday’) and returns the number of days to the 
next specified weekday. The input should be case-insensitive. If the specified weekday is today, return `Hey, 
today is ${ specifiedWeekday } =)`, otherwise return `It's ${ number } day(s) left till ${ specifiedWeekday }`.
Please note, although input is case-insensitive, weekday name in the output string should be always in proper 
case*/
function howFarIs(specifiedWeekday){
  let number,
      week = 7,
      today = new Date(),
      days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      today = today.getDay();
  let specDay = days.indexOf(specifiedWeekday.toLowerCase());  
  let returnDay = specifiedWeekday.charAt(0).toUpperCase() + specifiedWeekday.slice(1);
  if (specDay === today){
      return `Hey, today is ${returnDay} =)`
    } else{
    number = specDay - today;
  if(number<0){
     number =number+ week;
    }
    return `It's ${number} day(s) left till ${returnDay}`
  }
}

/*Write a function that accepts a string as an input and returns a boolean that defines if the input is a valid 
JavaScript variable. Use a regular expression to validate the input. Here is the syntax for valid identifiers:
- each identifier must have at least one character.
- valid identifier characters are the following: alpha, digit, underscore, or dollar sign.
- the first character cannot be a digit.*/
function isValidIdentifier(str) {
  let result = (/^[^\d]\w+\W*[^!]$/gm).test(str);
  return result;
}

/*Write a function that accepts a string as an input, capitalizes the first letters of each word and returns the 
capitalized string. Use a regular expression to achieve the desired result.*/
function capitalize(str){
  let finalSentence = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  return finalSentence;
}

/*. Write a function that accepts a string as an input and returns a boolean that defines if the input is a valid 
audio file. The file is valid if it satisfies the conditions:
- file name consists of 1+ uppercase and /or lowercase letter(s),
- valid extensions: .mp3, .flac, .alac, or .aac.
Use a regular expression to achieve the desired result*/
function isValidAudioFile(str) {
  if(typeof str === 'string'){
    let boolSentence = (/^[a-z]+\.(flac|mp3|alac|aac)$/i).test(str);
    return boolSentence;
  }
}

/*Write a function that accepts a string as an input and returns an array of all valid hexadecimal colors 
extracted from the string (or an empty array if it does not contain any). Use a regular expression that 
matches colors in either #abc or #abcdef format. Please, pay attention to the word boundaries, so that if 
the string contains some invalid hexadecimal colors like #eeee, thy will not be parsed partially (i.e. no #eee 
in the output array).*/
function getHexadecimalColors(str){
  let arr = [];
   let regExp = /#[a-f0-9]{3}([a-f0-9]{3})?\b/gi;
    let resultStr = str.match(regExp)
    if (resultStr === null){
        return arr;
    } else {
    return resultStr;
  }
}

/*Write a simple password validation function that accepts a string as an input and returns either true 
(valid) or false (invalid). The password is considered to be valid if it satisfies all of the following 
requirements:
- there is at least 1 uppercase letter.
- there is at least 1 lowercase letter.
- there is at least 1 number.
- needs to be at least 8 characters long.
It is invalid otherwise. Use a regular expression to validate the password*/
function isValidPassword(passw){
  let result = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w]{8,}$/).test(passw);
  return result;
}

/*. Write a function that takes a number or a string that can be easily converted to a number, inserts 
commas between the numbers as thousands separators and returns the formatted string. Use a regular 
expression to achieve the desired result*/
function addThousandsSeparators(str){ 
  if (typeof str === 'number'){ 
      str = str + '' ;    
} 
      return str.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
} 

/*Write a function that take a text as argument and return array of URLs which are in that text. Use a 
regular expression to achieve the desired result*/
function getAllUrlsFromText(text) {
  let regex = /(https:[/][/]|http:[/][/]|www.)[\w\-.]+\.[a-zA-Z]{2,3}/g;

  if (regex.test(text)) {
      return text.match(regex)
  } else if (text === undefined) {
      return 'error'
  } else {
      return []
  }
}