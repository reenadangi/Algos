function moveZeroes(nums){
    var j=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[j]=nums[i];
            j++;
        }
    }
    
    for(i=j;i<nums.length;i++){
        nums[i]=0;
    }
console.log(nums);
}
moveZeroes([0,1,2,0,6,7])