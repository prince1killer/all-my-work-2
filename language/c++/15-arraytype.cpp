#include<iostream>
using namespace std;
int main(){
    // int n;
    // cout<<"Enter the size of an array="<<endl;
    // cin>>n;
    int n = 11;
    int arr[n]={1,2,34,4,5,6};
    cout<<sizeof(arr)/sizeof(int)<<endl;
    for(int i=0;i<=n;i++){
        cout<<arr[i];
    }
    return 0;
}