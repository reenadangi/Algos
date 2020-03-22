public class Palindrome{
    public static void main(String[] args) {
        System.out.println("Palindrome");
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
    }
    public static boolean isPalindrome(String s) {
        s=s.replaceAll("\\s+","");
        s=s.replaceAll("[^a-zA-Z0-9]", ""); 
        System.out.println(s);
        char[] array=s.toCharArray();
        int start=0;
        int end=array.length-1;
        while(start<end){
            if(Character.toUpperCase(array[start])==
            Character.toUpperCase(array[end]))
            {
            start++;
            end--;
            }
            else{
                System.out.println(array[start]);
                System.out.println(array[end]);
                return false;
            }
        }
        return true;
    }

}