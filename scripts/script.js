import { changeText } from "./dom-display.js";
import { calculate } from "./math-calculations.js";

// Variables to store values to calculate
let stored = 0;
let currentOperator = "=";
let inputNewNum = false;

// Special storage variables
let grandTotal = 0;
let memoryRecall = 0;
let mrcCount = 0;

// Variables for DOM objects
const displayScreen = document.querySelector(".calculation");
const numBtns = document.querySelectorAll(".numpad__input--num");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");
const opBtns = document.querySelectorAll(".numpad__input--ops");
const percBtn = document.getElementById("percBtn");
const sqrtBtn = document.getElementById("sqrtBtn");
const deleteBtn = document.getElementById("deleteBtn");
const gtBtn = document.getElementById("gtBtn");
const mrcBtn = document.getElementById("mrcBtn");
const memMinusBtn = document.getElementById("memMinusBtn");
const memPlusBtn = document.getElementById("memPlusBtn");

// FUNCTIONS
// Reset to zero
const resetZero = () => {
    changeText(displayScreen, 0);
    stored = 0;
    grandTotal = 0;
};

// Display number
const numPress = (num) => {
    if (inputNewNum === true || displayScreen.innerText === "0") {
        /*  
        If a new number input has started or the display is "0"...
        ... Display "0." if decimal is entered or...
        ... Display num
         */

        num === "."
            ? changeText(displayScreen, "0.")
            : changeText(displayScreen, num);
        inputNewNum = false;
    } else if (num === ".") {
        /* 
        If decimal point is entered...
        ... Concatenate decimal point if there isn't one already
        */

        if (!displayScreen.innerText.includes(".")) {
            changeText(displayScreen, displayScreen.textContent + num);
        }
    } else if (num) {
        /* 
        If a number is entered...
        ... Concatenate the numbere onto the display if display isn't empty 
        ... AND is under 10 characters
        */

        if (
            !displayScreen.innerText == "" &&
            displayScreen.innerText.length < 10
        ) {
            changeText(displayScreen, displayScreen.innerText + num);
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

    if (currentOperator !== "=") {
        grandTotal += Number(result);
        String(grandTotal);
        console.log(
            `Added ${displayScreen.innerText} to Grand Total (GT). Current value in GT: ${grandTotal}`,
        );
    }

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

    stored = 0;
    grandTotal = 0;
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

// Displays grand total of the previous calculations
gtBtn.addEventListener("click", () => {
    changeText(displayScreen, grandTotal);
});

// Adds value to memory
memPlusBtn.addEventListener("click", () => {
    memoryRecall += Number(displayScreen.innerText);
    console.log(
        `Added ${displayScreen.innerText} to memory. Current value in memory: ${memoryRecall}`,
    );
});

// Subtracts value from memory
memMinusBtn.addEventListener("click", () => {
    memoryRecall -= Number(displayScreen.innerText);
    console.log(
        `Subtracted ${displayScreen.innerText} to memory. Current value in memory: ${memoryRecall}`,
    );
});

// Displays memory total
mrcBtn.addEventListener("click", () => {
    mrcCount += 1;
    if (mrcCount >= 1) {
        memoryRecall = 0;
        mrcCount = 0;
    } else {
        changeText(displayScreen, memoryRecall);
        console.log(`Currently displaying value in memory: ${memoryRecall}`);
    }
});
