function removeDuplicate(nums){
    if(nums.length==0) return 0;
    var i=0;
    for(var j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            // when it is not duplicate 
            i++;
            nums[i]=nums[j];
        }
    }
    //array len
    var len=i+1;
    for(i=0;i<len;i++){
        console.log(nums[i])
    }

}
removeDuplicate([2,2,3,4,5,5,6,7,8,9,10]);