const num1 = prompt("Enter a number: ");
const operator = prompt("Enter the operator(+, -, /, *): ");
const num2 = prompt("Enter a number: ");


if (operator == '+') {
    result = num1 + num2;
}
else if(operator == '-'){
    result = num1 - num2;
}
else if(operator == '/'){
    result = num1 / num2;
}
else
{
    result = num1 * num2;
}

console.log(`Result = ${result}`);