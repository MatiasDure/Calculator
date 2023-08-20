class Operator
{
    constructor(pOperator, pFunc)
    {
        this.operator = pOperator;
        this.func = pFunc;
    }
}

function Add(pNum1, pNum2)
{
    return pNum1 + pNum2;
}

function Sub(pNum1, pNum2)
{
    return pNum1 - pNum2;
}

function Mult(pNum1, pNum2)
{
    return pNum1 * pNum2;
}

function Div(pNum1, pNum2)
{
    return pNum2 === 0 ? "ERROR" : pNum1 / pNum2;
}

function Parse(pInput)
{
    let split = pInput.split(" ");

    let operandA = split[0];
    let operator = split[1];
    let operandB = split[2];

    Operate(operator, operandA, operandB);
}

function Operate(pOperator, pOperandA, pOperandB)
{
    for(oper of operators)
    {
        if(pOperator !== oper.operator) continue;

        let result = oper.func(Number(pOperandA), Number(pOperandB));
        
        outputField.textContent = result % 1 === 0 ? result : (Math.floor(result * MAX_REMAINDER)) / MAX_REMAINDER;
    }
}

//5 digits max after the decimal point
const MAX_REMAINDER = 100000;

const operators = [new Operator("+", Add),
                    new Operator("-", Sub),
                    new Operator("*", Mult),
                    new Operator("/", Div)];

const numbers = document.querySelectorAll(".number");
const opers = document.querySelectorAll(".operator");
const inputField = document.querySelector(".input-values");
const outputField = document.querySelector(".output-values");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

let operand = "";
let hasDecimal = false;
let placedOperator = false;

numbers.forEach(num => num.addEventListener("click", () => PopulateInputField(num.dataset.value)));
opers.forEach(oper => oper.addEventListener("click", () => AddOperator(oper.dataset.value)));
equalBtn.addEventListener("click", () => Parse(inputField.textContent));
clearBtn.addEventListener("click", ResetFields);

function PopulateInputField(pValue)
{
    if(pValue === ".")
    {
        if(hasDecimal) return;

        operand += operand.length === 0 ? `0${pValue}` : pValue;
        
        hasDecimal = true;
    }
    else operand += pValue;

    inputField.textContent = operand;
    placedOperator = false;
}

function AddOperator(pOperator)
{
    if(placedOperator) return;

    if(operand.split(" ").length === 3)
    {
        Parse(operand);
        inputField.textContent = outputField.textContent;
    }

    inputField.textContent += ` ${pOperator} `;
    operand = inputField.textContent;
    hasDecimal = false;
    placedOperator = true;
}

function ResetFields()
{
    inputField.textContent = "0";
    operand = "";
    outputField.textContent = "0";
    hasDecimal = false;
    placedOperator = false;
}


