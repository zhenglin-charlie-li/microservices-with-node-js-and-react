Typescript
TypeScript is a superset of JavaScript

Browsers understand JavaScript only. For your application to work, when you write it in TypeScript, you need to compile your code and convert it to JavaScript. you can convert a JavaScript file to a TypeScript file by simply renaming the extension from .js to .ts .

Writing types can be optional in TypeScript

Features of TypeScript
TypeScript has additional coding features that you won't find in JavaScript:

Type system 
👍Type System
Interfaces
Namespaces
Generics
Abstract classes
Data modifiers
Optionals
Function overloading
Decorators
Type utils
readonly keyword


Compiler options
By using compiler options, you can control how the JavaScript is generated from the source TypeScript, in a JSON file named tsconfig.json.






Type System

Any type
Remember that all the convenience of any comes at the cost of losing type safety. 

Type safety is one of the main motivations for using TypeScript. You should avoid using any when it's not necessary.

Unknown type
Any value is assignable to type unknown. However, you can't access any properties of an unknown type, nor can you call or construct them. 

The core difference between any and unknown is you are unable to interact with a variable of type unknown;

Type assertion
A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

Type assertions have two forms. One is the as-syntax:

(randomValue as string).toUpperCase();

The other version is the "angle-bracket" syntax:

(<string>randomValue).toUpperCase();

Type guards
type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
Union types |
A union type describes a value that can be one of several types

let multiType: number | boolean; multiType can be a number or a boolean

Intersection types &
An intersection type combines two or more types to create a new type that has all properties of the existing types.

Literal types
There are three sets of literal types available in TypeScript: string, number, and boolean. By using literal types, you can specify an exact value that a string, number, or boolean must have.

type testResult = "pass" | "fail" | "incomplete";

Arrays
There's no advantage to using one over the other

let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];

Tuples
To declare a Tuple, use the syntax variableName: [type, type, ...]

let person1: [string, number] = ['Marcia', 35];

Interfance
The only job of an interface is to describe a type with properties and methods

Interfaces have no run-time representation; they are purely a compile-time construct.

See Structural Typing

type aliases can act like interfaces. The key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable. Also, you can only describe a union or tuple using a type alias.

Property type	Description	Example
Required	All properties are required, unless otherwise specified.	firstName: string;
Optional	Add a question mark (?) to the end of the property name. Use this for properties that are not required. This prevents the type system from raising an error if the property is omitted.	firstName?: string;
Read only	Add the readonly keyword in front of the property name. Use this for properties that should only be modified when an object is first created.	readonly firstName: string;
Other use of Interface
Create indexable types

Describe a JavaScript API
