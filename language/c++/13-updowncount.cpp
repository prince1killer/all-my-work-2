#include<iostream>
using namespace std;
int positiveCount(int n){
 if(n == 100){
    return n;
 }
 else{
    cout<<n<<endl;
    return positiveCount(n+1);
 }

}
int negativeCount(int n){
 if(n == 0)
    return n;

 else
    cout<<n<<endl;
    return negativeCount(n-1);

}

int main(){
    int n,a;
    cout<<"Enter the value=";
    cin>>n;
    cout<<"Enter 0 or 1 if 0 then count -ve and for 1 we count +ve=";
    cin>>a;
    if(a==0){
        negativeCount(n);
    }
    else if(a == 1){
        positiveCount(n) ;   
    }
    else{
        cout<<"type one or zero"<<endl;
    }
    return 0;
}