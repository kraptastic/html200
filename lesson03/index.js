let x = 3;
let y = 4;
let z = 5;
const pi = 3.14;
let k = 0;

console.log('A triangle has sides of ' + x + ' and ' + y + ' units. How many units is the hypoteneuse?')
if (Math.sqrt((x*x)+(y*y)) == z){
  console.log('The hypoteneuse is ' + z + ' units.')
}
else{
  console.log('Something went wrong.')
}
console.log('Pi * diameter is the formula for circumference. What is the circumference of a circle with a diameter of 3?')
console.log('The circumference of a circle with diameter 3 is ' + (pi * x) + ' units.')
console.log('If the circle had a diameter of 4 units, the circumference would be ' + (pi * y) + ' units.')
let A = pi * y * y;
console.log('What is the area of the same circle? Area = pi * r^2. The area is ' + (A) + ' units.')
console.log('If it was a pizza, I would give you half. That equates to ' + (A/2) + ' square units of pie. Cowabunga dude. I bet you wish it were in miles?')
console.log('You may thank me for the even split. I could have chosen a skewed modulo and left one of us with ' + (A%14) + ' sq units of pie. Bummer dude')
