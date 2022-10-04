// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: 
// letter 'a', any character, letter 'b'
const str = 'ahb acb aeb aeeb adcb axeb';
const regExp = /a[a-z]b/g;
const result = str.match(regExp).join(', ');
console.log(result);

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const strTwo = '2 + 3 223 2223';
const regExpTwo = /2 \+ 3/;
console.log(strTwo.match(regExpTwo));

// Get the day, month and year of the current date and output it to the console separately
const date = new Date();
const nowDate = date.getDate();
const nowMonth = date.getMonth() + 1;
const nowYear = date.getFullYear();
const todaysDate = `${nowDate}.${nowMonth}.${nowYear}`;
console.log(todaysDate);