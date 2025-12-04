console.log(eval("2 + 2"));   // 4
console.log(eval(new String("2 + 2")));  // 2 + 2
console.log(eval("2 + 2") === eval("4"));  // true
console.log(eval("2 + 2") === eval(new String("2 + 2")));   // false

// takes a string and runs it as JavaScript code.


eval("delete everything"); // Risky code]



