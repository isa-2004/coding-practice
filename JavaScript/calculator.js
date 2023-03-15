const num1 = prompt("Enter a number: ");
const num2 = prompt("Enter a number: ");

const operator = prommpt("Enter the operator(+, -, /, *): ");

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