function reverseString(s){
    var start=0;
    var end=s.length;
while(start<=end){
    var temp=s[end];
    s[end]=s[start];
    s[start]=temp;
    console.log(start)
    start++;
    end--;
   

}
console.log(s);
    
}
reverseString("hello")