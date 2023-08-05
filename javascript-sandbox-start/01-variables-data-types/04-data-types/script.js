// Primitive data types

/*
- String
- Number
- Boolean
- Null - intentionally no value
- undefined - variable not defined or assigned constructor returns unique symbol....
- symbol - built-in object 
- BigInt - new data type just introduced for very large numbers
*/

// Reference Data Types

/*
Reference types or objects - objet literals, array and functions are all examples of reference types

JS - dynamically typed language don't explicitly define types for variables other languages are static e.g. C,C++ and Java

TypeScript - static typed is allowed

 */

// Symbol
const id = Symbol("id");

const output = id;
console.log(output, typeof output);
