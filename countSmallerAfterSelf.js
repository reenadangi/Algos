function countSmallerAfterSelf(nums){

    var arr=[]
    for(var i=0;i<nums.length;i++){
        var count=0;
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        arr[i]=count;
    }
console.log(arr)
}
countSmallerAfterSelf([5,2,6,1])