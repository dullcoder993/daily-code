function missingNumber(arr){
    let size = arr.length;
    let sum = 0;
    let sum1= 0;
    let n=size +1;

    for(i=0;i<size;i++){
        sum = sum + arr[i];
    }
    sum1 = n*(n+1)/2;
    return sum1-sum;

}
let arr = [1,2,3,4,5,6,8,9];
console.log(missingNumber(arr));
