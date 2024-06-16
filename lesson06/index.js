/* bank application pseudocode
prompt user to tell them choices of actions
user has 4 action choices
  enter Q to quit and close the program immediately
  enter W to perform a withdrawal (function which prompts user for a value, performs math against a balance, then returns to 4 action choices)
  enter D to deposit (function which prompts user for a value, performs math against a balance, then returns to 4 action choices)
  enter B to view balance (function which prompts the value of the balance)
  
  design requirements:
  no negative balance possible -- DONE
  deposit cap of 50,000 -- DONE
  warning if low balance <15% -- DONE
  prompt for confirmation if amount withdrawn leaves <$300
  */
let balance = 2500;
bank();
function bank() {
  let action = prompt(
    "Please input first letter of the following choices, then enter: (w)ithdraw, (d)eposit, (b)alance, or (q)uit."
  );
  if (action == "b") {
    displayBalance();
  } else if (action == "w") {
    withdraw();
    displayBalance();
  } else if (action == "d") {
    deposit();
    displayBalance();
  } else if (action == "q") {
    displayBalance();
    return;
  } else {
    alert(
      "Invalid input: please input first letter of the following choices, then enter: (w)ithdraw, (d)eposit, (b)alance, or (q)uit."
    );
  }
  bank();
}
function displayBalance() {
  if (balance <= 50000 * 0.15) {
    alert(
      "ALERT: Your current balance is less than 15% of your $50,000 limit. Current balance: $" +
        balance
    );
  } else {
    alert("Your current balance is: $" + balance);
  }
}

function withdraw() {
  let amount = prompt(
    "Enter a value to withdraw. Your lower account limit is $0"
  );
  amount = isNaN(amount) ? 0 : parseFloat(amount);
  //check for balance dropping below 0 and also check for lower than 300, confirm with user if <300
  if (balance - amount < 0) {
    alert("This withdrawal amount would overdraft and has been rejected.");
  } else if (balance - amount < 300 && balance - amount > 0) {
    let confirm = prompt(
      "This withdrawal amount will leave a remaining balance of under $300. Please confirm with y or n if you would like to continue with this withdrawal."
    );
    if (confirm == "y") {
      balance = balance - amount;
      return balance;
    } else if (confirm == "n") {
      alert("You have rejected the deposit amount.");
      return balance;
    } else {
      alert(
        "Invalid input. Please input y or n to confirm withdrawal leaving a remainder under $300."
      );
    }
  } else {
    balance = balance - amount;
    return balance;
  }
}
function deposit() {
  let amount = prompt(
    "Enter a value to deposit. Your account upper limit is $50,000"
  );
  amount = isNaN(amount) ? 0 : parseFloat(amount);
  //check for balance going over upper limit
  if (balance + amount >= 50000) {
    alert(
      "This deposit amount would exceed your upper limit of $50,000 and has been rejected."
    );
  } else {
    balance = balance + amount;
    return balance;
  }
}
