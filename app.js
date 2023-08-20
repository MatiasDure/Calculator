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

        console.log(oper.func(Number(pOperandA), Number(pOperandB)));
    }
}

const operators = [new Operator("+", Add),
                    new Operator("-", Sub),
                    new Operator("*", Mult),
                    new Operator("/", Div)];

// let input = prompt("Enter an equation");

// Parse(input);

