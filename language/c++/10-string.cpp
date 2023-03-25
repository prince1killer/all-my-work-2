// #include <cstdio>
#include<iostream>
#include<string>
using namespace std;
int main(){
    string myName, lastName;
    // string lastName;
    cout<<"Enter your first name =";
    getline(cin,myName);
    cout<<"Enter your last name=";
    getline(cin,lastName);
    cout<<"Your name is "<<myName<<lastName<<endl;
    return 0;
}