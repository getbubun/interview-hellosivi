function findSum(arr, sum){

    let ans = [];

    for(let i= 0; i<arr.length; i++){
        for (j=arr.length -1; j>i; j--){
            if(arr[j]+ arr[i] === sum){
                ans.push(arr[j]);
                ans.push(arr[i]);
            }
        } 
    }

    return ans;

}

output = findSum([1,2,3,4,5,6,7,8], 10);

console.log(output);