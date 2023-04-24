
var twoSum = function(nums, target) {
    const twosums = [];
    for(var i = 0; i < nums.length; i++)
    {
        for(var j=1; j < nums.length; j++)
        {   
            if(i === j) {
            continue;
            }
            if(nums[i] + nums[j] == target)
            {
            //  twosums[0] = i;
            // twosums[1] = j;
                // return twosums;
                return [i,j];
            }
        }
        
    }
};