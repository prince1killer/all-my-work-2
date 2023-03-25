#include<iostream>
using namespace std;

int getMax(int arr[],int n){
    int max = INT_MIN;
    for(int i=0;i<=n;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
int getMin(int arr[],int n){

}

int main(){
    int n;
    cout<<"Enter your array size=";
    cin>>n;
    int arr[100];
    cout<<"Enter the value of an array=";
    for(int i=0;i<=n;i++){
        cin>>arr[i];
    }
    getMax(max,n);
    cout<<getMax(max);
    return 0;
}