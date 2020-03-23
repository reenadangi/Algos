public class Palindrome{
    public static void main(String[] args) {
        System.out.println("Palindrome");
        // System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindromeII("abc"));
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

    public static boolean isPalindromeII(String s){
        s=s.replaceAll("\\s", "");
        s=s.replaceAll("[^a-zA-Z0-9]", ""); 
        char[] array=s.toCharArray();
        int start=0;
        int end=array.length-1;
        while(start<end){
            if(array[start]==array[end]){
                start++;
                end--;
            }
            else{
                return (isPalin(s, start + 1, end) || isPalin(s, start, end - 1));
            }
        }    
        return true;
    } 
    public static boolean isPalin(String s, int i, int j){
        while(i <= j){
            if(s.charAt(i) != s.charAt(j))
                return false;
            i++;
            j--;
        }
        return true;
    }
}