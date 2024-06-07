function squareButton() {
  let squareNumber = prompt("Enter the value to be ultrasquared");
  let squaredNumber = Number(squareNumber) * Number(squareNumber);
  let outputString =
    "Your number is now " + squaredNumber + " and 100% more ultra than before";
  alert(outputString);
}

function multiplicationButton() {
  let multiplicationNumberOne = prompt("Please enter value #1");
  let multiplicationNumberTwo = prompt("Please enter value #2");
  let multiplicationResult =
    Number(multiplicationNumberOne) * Number(multiplicationNumberTwo);
  let outputString =
    "The two numbers multiplied together equal " +
    multiplicationResult +
    " and the result is 0% more ultra than before";
  alert(outputString);
}
