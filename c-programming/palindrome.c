bool isPalindrome(int x){
    long int reversed = 0;
    int originalnum = x;

    if(x < 0 || (x != 0 && x%10 == 0)){
        return false;
    }
    while(x != 0){
        reversed = reversed*10 + x % 10;
        x = x / 10;
    }
    return originalnum == reversed;
}