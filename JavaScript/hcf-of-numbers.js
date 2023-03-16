let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
let hcf;

for(i = 1; i <= num1 && i <= num2; i++)
{
    if(num1 % i == 0 && num2 % i == 0)
    {
        hcf = i;
    }
}
console.log("Hcf is " + hcf);
