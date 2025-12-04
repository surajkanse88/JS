# JS

JavaScript js
Was present in every browser for scripting purpose
Then it extracted
Now it is used for Frontend, backend also
Node.js and Deno.js founder => Ryan Dahl
node -v
node filename.js
Documentation or more information =>
Topic mdn
Documentation from mozilla not original 
EcmaScript => Standardization for how to write code in javascript 
V8 engine in every browser to run js
typeof null       => object 
typeof undefined       => undefined 
Var got depricated
Let is more preferred 
NaN => Not a Number 
type conversion to number 
Null => 0
undefined => NaN
true => 1
"String" => NaN
Type conversion to Boolean 
1 => true
"" => false
"Anystring" => true
Operators
**  => Power 
•    => multiplication 
Is bigInt() a condtructor
Symbol(5)  // 5 is unique
console // global object 
>=   First conversion and then condition check
<=   First conversion and then condition check
===  Strict check => check without type conversion 
Js // loosely coupled language
TS // type difference 
Node.js // is a environment not a framework 
Data types
Primitive and nonprimitive 
How they're stored in memory and how can we access them 
Call bt value vs call by reference 
We cannot define language in js
Js is statically typed or dynamically 
TypeScript 
Different syntax 
Arrays => call by reference 
Objects in curly braces/ can be stored in a variable 
Can store a function within a variable
Return type of nonprimitive datatype => function 
Function => function (object function)
Stack => call by value => copy 
Heap => call by reference=> refer to the same memory location => problem May occur while accessing the data by multiple variables
`` => backticks => string interpolation => use variables within string=> ${varName}
Declare new string=>
const gameName = new String ('string here')
=> string object => not an array => key value pairs => length property=>(count the number of letters)
If we use functions or methods like toUpperCase(), it will show the processed output but doesn't change the value 
.charAt( )   // value at index
.indexOf(' ').   // Index of character 
.substring( startnum, endnum+1 ) // startnum to endnum
.slice( startnum, endnum+1 )   // can pass negative numbers => reverse order
.trim()    // Removes spaces
.replace('whomToReplace', 'whatToReplace')   // 
.includes('')    // return true if consists else false
.split('separator')     // Second parameter could be limitor but it's optional 
.blink()
.bold()
.
.
.
Number can be defined as Number (default)
If we want the number to be string =>  varName.toString()
.length()
.tofixed(number)   // How many digits after decimal point 
.toPrecision(number)   // returns the round off value from right side
.toLocaleString() // commas in large number (US standard)
.toLocaleString('en-IN') // in Indian number format 
Number.       // There are many functions that we can use with
Math
It is a property having multiple properties 
.abs()  // Absolute if number is negative then convert it into positive 
.round().  // Roundoff
.ceil()   // top roundoff // value+1 if decimal part exists 
.floor()   // Bottom roundoff // ignores the decimal part
.min().  // Pass the values in parameters and it will return the minimum value
.max()
.random()    // returns random value < 1 && >0
Afterwards Date maybe declared as a global object like 
varDate.toString()
.toLocaleString()   // define a object of date => can pass multiple parameters
.toDateString()
.
.
.
multiple methods to use
console.log(typeof mydate)
months starts from 0
.getMinutes()
.getMonth()
.getDay()
In js array can contain elements of heterogeneous type
Resizable array
Can contain array inside of array
Array copy operations => shallow copy=> two copies share the same references
Elements are stored in 0 based indexing format
And contain a .length property 
And we got a Prototype and another prototype called object
.push()  // add element to array
.pop()  // Remove last value
.unshift()   // Add element at the start by shifting every element forward
.shift()    // Remove element inserted
.includes()   // Returns Boolean value of it contains or not 
.indexOf()  // Returns -1 if doesn't exist
.join()   // Adds all elements of an array by converting them into string
.slice( num1, num2 )   // returns the section of an array => from num1 to num2 -1 => copy the elements by keeping the original array same => no array manipulation 
.splice() // returns the section of an array => from num1 to num2 => removes the elements from the original array => array manipulation 
.push()  // adds the element by modifying the existing array 
.concat() // combines two or more arrays and returns a new array without modifying existing 
.flat(num1)   // spread the elements till a depth => num1 => it could be infinity    depth => array contains array inside another then depth
.isArray(" ")  // 
.from(" ")   
.of(var1, var2, var3,...)  // returns new array from set of elements 
Spread operator=> ...
Arr3 = [...arr1, ...arr2]
Objects
Singleton => object made when constructor is created=> unique object 
Declaration like literal => singleton is not created
Object.create()  // constructor => singleton is created
Keys: values
In array user doesn't have freedom to define keys ( values)
In object user have freedom to define keys and values
Variable inside the object can be accessed as objectName.variableName
Or
objectName["variableName"]      // like arrays
Can overwrite the values of variable using for operator
Can freeze object using
Object.freeze(Objectname) // without error
if we print the object without adding anything to it, then it'll return {}    (empty object) not undefined
const tinderUser = new Object() //singleton object => const tinderUser = {} //non-singleton object=> same output => {}
we can declare an object inside the object as an element of the object 
JS => unlimited nesting allowed
accessed by using dots
.assign( target, source )   // target ={} and source= remaining objects to be combined in the target
we can take objects inside the array
const arr= [ {    }, {      }, {       }  ]
accessed using arr[1].email


console.log(Object.keys(objectName))   //  which object keys you required // extract keys
console.log(Object.values(objectName))   //  which object values you required // extract values 
Object.entries(objectName)  // every key-value is sparated as an array


Destructuring could be done on objects as well as arrays


ObjectName.hasOwnProperty('')
Symbol
Syntax
use cases


Access element inside the object=> objectname.elementname 
But the above is not feasible 
And we use
Const {elementNameToExtract}  = objectnameFromWhereToExtract
Now we can directly use elementName openly 
API =  aple kaam dusryala dene ani apan free houn jaane
Like we order a thing in hotel, we don't have to worry in What are the ingredients, who will make, how will he make. we don't have to focus on these things, 
APIs returns values
Previously values came in XML form and it was very complex
But now values come in JSON form // JavaScript Object Notation
But json is not limited for only JS it's used in many languages 
And json is nothing but an object  => {   } 
But here keys and values both are strings 
Many times APIs are in array format
Array of objects


Functions
Multiple syntaxes to write a function
Js memory mgmt is less complex than cpp
Function=> Lihilela code eka package madhe band kelay
Function definition => parameters 
Function call => arguments 
Rest operator = Spread operator   ...
Depends upon use case
Generic function=> more preferable in industry => we can use the same function for different methods or objects 


Scopes 
let, const, var
Var => scope is throughout the program, no matter whether it is in block scope or global scope => thatswhy it's not preffered




DOM Document object model => how html pages are manipulated
Js variable can hold anything like function, json values , objects, 
Hoisting=??


This => current context
Global this => {} => no context assigned to this
How this works in global scope
Browser=> global object = window object 
this => is allowed in objects not in functions
Arrow function 
Steps for arrow function 
Implicit return in Arrow function=> remove {}, return keyword, shift the rest into the same line
When we remove {} we have to remove return keyword 
Otherwise it'll not work
Syntax: (paramrters) => { // code}
{} => return keyword 
() => no return keyword 




IIFE = Immediately Invoked Function Expression 
Global scope pollution 
The problem occured due to Global scope pollution 
To overcome the pollution of Global scope pollution variables
Scope 
Immediate execution 
( // function definition) ()
If there is any error in IIFE then eroor would be occured due to absence of ;
Named iife
Unnamed iife




Js is single threaded 
Everything is a process 


=== strict comparison including type
2 == '2' => true 
2 === '2' => false
Var is accessible around the globe, whether it is defined inside the body of loops or not
Swich statements are more efficient than if else, because in if else there is multiple checking.
If we don't write a break statement in cases then it would execute the rest code executor the rest


Truthy and falsy => values are considered as true and false by default
Truthy => [], "0", "false", " ", {}, function() {}
Falsy => "", false, 0, -0, BigInt 0n, null, undefined, NaN
Else => true


Nullish Coalescing operator (??)
If null or undefined value comes in case of database query request and responses the next thing will be executed 


Ternary operator 
Condition = execution1 ?execution2
If true => execution1   if false => execution2


Continue (skips a condition) => skip
Break


For of loop
Objects are iterators
Arrays are iterators


Maps
Map is also an object 
Map remembers original insertion order of keys
Unique key collection, no duplication => skips if duplicate key is entered 
Map is not iteratable


Objects looping 
Forin loop
Difference between forin and forof
Forin => keys
Forof => values
Higher order arrays


Foreach function => includes callback function=> no need to give a name to function 
Array1.forEach( function ( item ) {} )
// item => a given name to a values of array as a parameter to the function 
Can be also done with array function (in five.js)
Does not return a value
We have to return it manually 


.filter() operation 
// callback function 
.filter( (variable1) => conditionWhichValuesShouldBeReturned )
// error may offer due to {} => if scope is open then you should use return keyword 


Chaining => writing multiple functions at a time


Reduce method => syntax?, what is accumulator, currentvalue => usecase


DOM
Html file => 
How is the structure of the model from which the page is made
Window object in console log
.geo => current location 
.document => all details=> html => no need to write it like window.document we can directly write document because it's common to use
.. jQuery
..location
..baseURI
.. children 
..childrenMode
..childrenType
Console.dir(document)
 Window=> document=> html
.links => hyml collection, not bydefault array => collection can be converted into an array
..maps, ..foreach  llops are not available
Selection mechanism => skills to    kkknow about something (element) in html
Document.getElementById('firstHeading')  => .innerHTML = "<h1> relacement text </h1>"
Document.getElementById('title')  => .className
Document.getElementById('title')  => .getAttribute('id')
Document.getElementById('title')  => .getAttribute('class')
Document.getElementById('title')  => .setAttribute('class', ''test")  // overwrite
Document.getElementById('title')  => .setAttribute('class', 'test', 'heading')


Const title = document.getElementById('title')
title.style.backgroundColor= 'orange'  // name or hexcode values
title.style.padding = '15px'
title.style.borderRadius = '15px'
title.textContent    // diffrence between these 3 👇
title.innerText
title.InnerContent
title.innerHTML
Difference between (above 3)
querySelector('h1')    // # and .  for tags and classes
querySelectorAll()


Events=>
=>Sequential executions
=>Exceptions
Asynchronous js


EventListener()
setTimeout(function(){}, 1000)
setInterval(function(){}, 2000, '')
clearInterval( funcName)   /// pass as parameter whom to stop











