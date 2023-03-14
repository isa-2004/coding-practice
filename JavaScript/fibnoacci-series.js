const num = prompt("Enter a number to find fibnoaci series till that number:");

let n1 = 0, n2 = 1, nextTerm;
console.log("Fibnoacci Series are: ");
for(i=1; i <= num; i++)
{
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}