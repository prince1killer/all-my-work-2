package language.java.pattern;

public class p11for {
    public static void main(String []agrs){
        for(int i=5;i>=0;i--){
            for(int j=0;j<=i;j++){
                System.out.print("  ");
            }
            for(int j=0;j<=5;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
