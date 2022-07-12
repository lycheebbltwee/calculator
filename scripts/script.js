import { changeText } from "./dom-display.js";
import { calculate } from "./math-calculations.js";

// Variables to store values to calculate
let stored = 0;
let currentOperator = "=";
let inputNewNum = false;

// Variables for DOM objects
const displayScreen = document.querySelector(".calculation");
const numBtns = document.querySelectorAll(".numpad__input--num");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");
const opBtns = document.querySelectorAll(".numpad__input--ops");
const percBtn = document.getElementById("percBtn");
const sqrtBtn = document.getElementById("sqrtBtn");
const deleteBtn = document.getElementById("deleteBtn");

// FUNCTIONS
// Reset to zero
const resetZero = () => {
    changeText(displayScreen, 0);
    stored = 0;
};

// Display number
const numPress = (num) => {
    if (inputNewNum === true) {
        // If a new number input has started
        if (num === ".") {
            // Display "0." if decimal is entered
            changeText(displayScreen, "0.");
        } else {
            // Display num
            changeText(displayScreen, num);
        }
        inputNewNum = false;
    } else if (displayScreen.innerText === "0") {
        // If current display is zero
        if (num === ".") {
            // Display "0." if decimal is entered
            changeText(displayScreen, "0.");
        } else {
            // Display num
            changeText(displayScreen, num);
        }
    } else if (num === ".") {
        // If decimal point is entered
        if (!displayScreen.innerText.includes(".")) {
            // If there isn't already a decimal point
            changeText(displayScreen, displayScreen.textContent + num);
            // Concatenate a decimal point onto the currently displayed number
        }
    } else if (num) {
        // If a number is entered
        if (
            !displayScreen.innerText == "" &&
            displayScreen.innerText.length < 10
        ) {
            // If the display is not empty
            changeText(displayScreen, displayScreen.innerText + num);
            // Concatenate that number onto the displayed number
        }
    }
};

// Execute operations
const mathOp = () => {
    // 1. Store currently displayed value
    const current = displayScreen.innerText;

    // 2. Calculate the result
    const result = calculate(stored, current, currentOperator);

    // 3. Display the result
    changeText(displayScreen, result);

    // 4. Store result
    stored = result;

    // 5. Allow next value to be created
    inputNewNum = true;

    // console.log(stored, current, result);
};

// EVENT LISTENERS
// Turn calculator 'on' or reset values
onBtn.addEventListener("click", () => {
    resetZero();
});

// Displays value of number button
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        const num = numBtn.innerText;
        numPress(num);
    });
});

// Displays value of number button
opBtns.forEach((opBtn) => {
    opBtn.addEventListener("click", () => {
        // 1. CSS focus on selected operator
        opBtn.focus();

        // 2. Execute calculation
        mathOp();

        // 3. Store operator
        currentOperator = opBtn.innerText;

        // console.log(currentOperator);
    });
});

// SPECIAL EVENT LISTENERS
// Turn calculator 'off'
offBtn.addEventListener("click", () => {
    if (displayScreen !== "") {
        changeText(displayScreen, "");
    }
});

// Converts current display to a percentage value
percBtn.addEventListener("click", () => {
    changeText(displayScreen, displayScreen.innerText / 100);
});

// Finds the square root of the currently displayed value
sqrtBtn.addEventListener("click", () => {
    const square = Math.sqrt(displayScreen.innerText);

    String(square).length > 10
        ? changeText(displayScreen, square.toPrecision(10))
        : changeText(displayScreen, square);
});

// Removes last value of string
deleteBtn.addEventListener("click", () => {
    displayScreen.innerText.length === 1
        ? changeText(displayScreen, "0") //
        : changeText(displayScreen, displayScreen.innerText.slice(0, -1));
});
