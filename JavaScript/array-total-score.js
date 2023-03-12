
    let i;
    let sum = 0;
    let my_array = [1, 2, 3, 4];
       
    for(i=0; i < my_array.length; i++)
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
    
    console.log('Sum of Array based on score is: ' + sum);
