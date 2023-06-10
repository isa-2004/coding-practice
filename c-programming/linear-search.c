#include<stdio.h>
#include<stdlib.h>

int main(){
    int a[20], i, target, number, found=0;
    printf("Enter the elements you want: ");
    scanf("%d", &number);

    printf("Enter the array elements: ");
    for(i=0; i<number; ++i)
    scanf("%d", &a[i]);

    printf("Enter the element to search:");
    scanf("%d", &target);

    for(i=0; i<number; ++i){
        if(a[i] == target){
        found = 1;
        break;
        }
    }
    if (found == 1) {
        printf("Element found!");
    }
    else{
        printf("Element not found!");
    }
}