function div(x)
{
  if (isFinite(1000 / x))
  {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}
console.log(div(0));
// Expected output: "Number is Infinity!""
console.log(div(1));
// Expected output: "Number is NOT Infinity."


isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Would've been false with the more robust Number.isFinite():
isFinite(null); // true
isFinite("0"); // true
