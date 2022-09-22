// Perform addition of various types (string + boolean, string + number, number + boolean)
let someString = 'Hello World';
let someBoolean = false;
let someNumber = 4;
console.log('Result of str + bool = ', someString + someBoolean);
console.log('Result of str + num = ', someString + someNumber);
console.log('Result of num + bool = ', someNumber + someBoolean);

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log('Result of str * bool = ', someString * someBoolean);
console.log('Result of str * num = ', someString * someNumber);
console.log('Result of num * bool = ', someNumber * someBoolean);

// Divide different types (string / boolean, string / number, number / Boolean)
console.log('Result of str / bool = ', someString / someBoolean);
console.log('Result of str / num = ', someString / someNumber);
console.log('Result of num / bool = ', someNumber / someBoolean);

// Perform explicit conversion (number, string, boolean)
let typeConversion = [123, '123', 'Hello', '', ' 123 ', 'He11o', ' ', true, false, NaN, null, undefined];
for (i = 0; i <= typeConversion.length; i++) {
    console.log(Boolean(typeConversion[i]), ' - result in ' + typeof !!typeConversion[i]);
    console.log(Number(typeConversion[i]), ' - result in ' + typeof +typeConversion[i]);
    console.log(String(typeConversion[i]), ' - result in ' + typeof `${typeConversion[i]}`);
}