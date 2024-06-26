function Module4(arr)
{ 
var sumArr
var sum = 0
sumArr = arr.slice(0,arr.length/2);
for (let i = 0;i<sumArr.length;i++)
sum += sumArr[i];
return sum;
}
console.log(Module4([1,12,3,4,9,8]));