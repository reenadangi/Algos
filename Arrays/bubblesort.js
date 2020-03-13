function sort(nums){
    for(var i=0;i<nums.length;i++){
        for(var j=i;j<nums.length;j++){
            if(nums[j]<nums[i])
                {
                    var temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                }
        }
    }

console.log(nums);
}
sort([2,4,1,6,3,8,0])