#include <stdio.h>
#include <stdlib.h>

#define max 3

int stack_arr[max];
int top = -1;

void push(data) {
    if(top == max - 1)
    {
        printf("Stack Overflow");
        return;
    }
    top = top + 1;
    stack_arr[top] = data;
}

int main()
{
    push(1);
    push(2);
    push(3);
    for(int i = 1; i <= max; i++)
    {
        printf("stack_arr[%d] = %d \n", i-1, stack_arr[i-1]);
    }
    return 0;
}