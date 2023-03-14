let num = prompt("Enter the number to check if its armstrong: ");

let noOfDigits = num.length;
let sum = 0;
let temp = num;

while(temp>0){
    let rem = temp%10;
    sum += rem**noOfDigits;
    temp = parseInt(temp/10);
}
if(sum == num){
    console.log("Given number is an Armstrong number.");
}
else{
    console.log("Given number is not an Armstrong number.");
}
