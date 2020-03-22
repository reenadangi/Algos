// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7] and k = 3

       
// Output: [5,6,7,1,2,3,4]
function reverse(nums,start,end){
    while(start<end){
        var temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
}
function rotate(nums,k){
   
   k=k%nums.length;
   console.log(k);
   reverse(nums,0,nums.length-1);
   console.log(nums);
   reverse(nums,0,k-1);
   console.log(nums);
   reverse(nums,k,nums.length-1);
   console.log(nums);
   
}

rotate([1,2,3,4,5,6,7],3);
rotate([1,2],3);
//7,1,2,3,4,5,6

// 5,6,7,1,2,3,4