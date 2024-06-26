function Module5(arr){
    arr2 = [1]
for (let i= 0;i<arr.length;i++ ){
    if (arr[i]>arr[i+1]){
        arr2[1]=arr[i];
        arr[i] = arr[i+1];
        arr[i+1]=arr2[1];
    }
}
return arr;
}
console.log(Module5([3,1,2,6,4,5]));