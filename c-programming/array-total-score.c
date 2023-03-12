// Online C compiler to run C program online
/* */
#include <stdio.h>

int main() {
    int i, sum;
    int my_array[] = {1, 2, 3, 4};
    int size = sizeof(my_array) / sizeof(my_array[0]);    
    for(i=0; i < size; i++)
    {
        if (my_array[i] % 2 == 1)
        {
            if(my_array[i] == 5)
            {
                sum += 5;
            }
            else
            sum+= 3;
        }
        else 
        {
            sum += 1;
        }
    }
    
    printf("Sum = %d",sum);
    return 0;
}
    
