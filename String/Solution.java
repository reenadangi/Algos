
class Solution {
    public static void main(String[] args) {
        char[] c= {'h','e','l','l','o'};
        reverseString(c);
        // display(c);
        display(reverseStringTwo("abcdefg", 2).toCharArray());
    }
    public static void reverseString(char[] s) {
     
        int start=0;
        int end=s.length-1;
       while(start<end){
           char temp=s[start];
           s[start]=s[end];
           s[end]=temp;
            start++;
            end--;
        }
    }
    public static void display(char[] s){
        for (char c : s) {
            System.out.println(c);
        }
    }
    // Input: s = "abcdefg", k = 2
    // Output: "bacdfeg"
    public static String reverseStringTwo(String s,int k){
        char[] a=s.toCharArray();
        for(int start=0;start<a.length;start+=2*k){
            int i=start;
            int j=Math.min(start + k - 1, a.length - 1);
            while(i<j){
                char temp=a[i];
            a[i]=a[j];
            a[j]=temp;
            i++;
            j--;
            }
        }
        return s=new String(a);
    }
}