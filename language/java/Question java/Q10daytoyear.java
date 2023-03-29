import java.util.*;
public class Q10daytoyear {
    public static void main(String []agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your days = ");
        int day = sc.nextInt();
        int week,month,year;
        System.out.println("week = "+ (week = day/7));
        System.out.println("Month = "+(month =  week/4));
        System.out.println("Year = "+(year = month/12));
    }
}
