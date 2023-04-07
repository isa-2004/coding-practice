#include <stdio.h>
#include <stdlib.h>

#define max 3;

int stack_arr[max];
int top = -1;

void main(data) {
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

}