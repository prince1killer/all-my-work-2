//======================================factorial=========================================
#include<iostream>
using namespace std;

int factorial1(int n){

    if(n==0)
        return 1;
    return n * factorial1(n-1);    
}
int factorial2(int a){
    if(a == 0){
        return 1;
    }
    else{
        int y=factorial2(a);
        int x= a-1;
        int ans = x*y;
        return 
        ans;
    }
    
}
int main(){
    int n;
    cout<<"Enter the value 1=";
    cin>>n;
    factorial1(n);
    cout<<factorial1(n)<<endl;
    //second type to solve 
    cout<<"Enter the value 2=";
    int a;
    cin>>a;
    factorial2(a);
    cout<<"answer 2="<<factorial2(a)<<endl;
    return 0;
}