/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

/*-------------------------------- Variables --------------------------------*/
let result = 0;
let equalPressed = false; // This boolean will be used to prevent multiple equal presses, and clear the display after each calculation

/*------------------------ Cached Element References ------------------------*/
// No need for cached element

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (equalPressed) {
      display.textContent = "";
      equalPressed = false;
      result = 0; // Resets result to 0 just in case
    } else {
      if (button.classList.contains("clear")) {
        display.textContent = "";
      } else if (!button.classList.contains("equals")) {
        if (display.textContent === "" && isNaN(button.textContent)) {
          // If the first character is an operation, do nothing!
          display.textContent += "";
        } else {
          display.textContent += button.textContent;
        }
      }
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (isNaN(display.textContent.charAt(display.textContent.length - 1))) {
    // If the last character is an operation display ERROR
    display.textContent = "ERROR";
    equalPressed = true;
  } else {
    result = eval(display.textContent); // A javascript built-in method to solve a string equation will do the magic!
    equalPressed = true;

    if (result === Infinity) {
      // If the value is divided by 0
      display.textContent = "ERROR";
    } else {
      display.textContent = result;
    }
  }
});

/*-------------------------------- Functions --------------------------------*/
// No need for functions

//*******************************//
//                               //
//   Think Smarter, not harder!  //
//                               //
//*******************************//
