let theArray = ['i', 'wanna', 'be', 'a', 'saikyou', 'hero'] /* JAM project - the hero */ 
console.log(theArray); /* extra log to display source words */
for (let i = 0; i < theArray.length; i++){
  /*declare a new array with loop counter "i" and indexed array object also using "i"*/
  let theOutput = [i, theArray[i]];
  /* join all together as string now*/
  console.log(theOutput.join());
}