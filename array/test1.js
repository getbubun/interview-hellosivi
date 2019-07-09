function findSum(arr, sum){

    let ans = [];

    for(num of arr){
        for (back of arr){
            if(num + back === sum){
                ans.push(num);
                ans.push(back);
            }
        } 
    }

    return ans;

}

output = findSum([1,2,3,4,5,6,7,8], 10);

console.log(output);