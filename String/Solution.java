
class Solution {
    public static void main(String[] args) {
        
        reverseString("hello");
    }
    public static void reverseString(String s) {
        String newStr="";
        for(int i=s.length()-1;i>=0;i--){
            System.out.println(s.charAt(i));
        }


    }
    }