const num = prompt("Enter the number to find factorial: ");
console.log(`The factors of ${num} is `);

for(i = 1; i<= num; i++){
    
    if(num % i == 0)
    {
        console.log(i);
    }
}