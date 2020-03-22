function reverseString(s){
    var start=0;
    var end=s.length-1;
while(start<end){
    var temp=s[end];
    s[end]=s[start];
    s[start]=temp;
    console.log(s)
    start++;
    end--;
   

}
console.log(s);
    
}
reverseString("hello")