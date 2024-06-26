'use strict;'
function Module1(arr,digit){
    var score;
for (let i = 0;i<arr.length;i++)
    {
        if (arr[i]== digit) 
            score++;
    } 
    if (score>0)
        return (true);
    else return(false);
}

