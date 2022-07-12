/*
A function that executes a math operation.
@param {(string|number)} stored -- Left-side operand (i.e., the number before operator)
@param {(string|number)} current -- Right-side operand (i.e., the number after operator)
@param {(string|number)} operator -- The operator to perform
@returns {string} -- The resulting value of the operation
*/

export const calculate = (stored, current, operator) => {
    let result;

    switch (operator) {
        case "+":
            result = Number(stored) + Number(current);
            return result.toString();
        case "−":
            result = Number(stored) - Number(current);
            return result.toString();
        case "÷":
            return (result = stored / current);
        case "×":
            return (result = stored * current);
        default:
            return (result = current);
    }
};
