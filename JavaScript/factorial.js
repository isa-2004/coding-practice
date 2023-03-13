const number = prompt("Enter the number to find the factorial: ");

if(number == 0)
{
    prompt("Factorial of 0 is 1");
}
else if(number < 0){
    prompt("Error! Factorial for negative number does not exist.");
}
else{
    let fact = 1;
    for(i = 1; i<=number; i++){
        fact *= i;
    }
    console.log("The factorial of " + number + " is " + fact);
}