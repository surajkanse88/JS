console.log(eval("2 + 2"));   // 4
console.log(eval(new String("2 + 2")));  // 2 + 2
console.log(eval("2 + 2") === eval("4"));  // true
console.log(eval("2 + 2") === eval(new String("2 + 2")));   // false

// takes a string and runs it as JavaScript code.


eval("delete everything"); // Risky code]


function test()
{
  const x = 2;
  const y = 4;
  // Direct call, uses local scope
  console.log(eval("x + y")); // Result is 6
  // Indirect call, uses global scope
  console.log(eval?.("x + y")); // Throws because x is not defined in global scope
}


