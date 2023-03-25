let target = 9;
let nums = [2,7,4,534,56,3,2,1,6];
var twoSum = function(nums, target) {
    for(let i=0;i<=nums.length-1;i++){
        let x = i+1;
        let ans=nums[i]+nums[x];
        if(ans == target){
            return i,x;
        }
        
    }
};
console.log(twoSum());
console.log(nums.length-1)