#include <iostream>

using namespace std;

int main() {
    int firstNumber;
    int secondNumber; 

    // Մուտքագրում և ստուգում ենք առաջին թիվը 
    while (true) { 
        cout << "Մուտքագրեք առաջին ամբողջ դրական թիվը։ ";
        if (cin >> firstNumber && firstNumber > 0) { 
            break; 
        }
        cout << "Սխալ մուտք․ մուտքագրեք ամբողջ թիվ, որը մեծ է 0-ից։" << endl; 
        cin.clear();
        cin.ignore(1000, '\n'); 
    } 

    // Մուտքագրում և ստուգում ենք երկրորդ թիվը 
    while (true) {
        cout << "Մուտքագրեք երկրորդ ամբողջ դրական թիվը։ ";
        if (cin >> secondNumber && secondNumber > 0) {
            break; 
        }
        cout << "Սխալ մուտք․ մուտքագրեք ամբողջ թիվ, որը մեծ է 0-ից։" << endl;
        cin.clear(); 
        cin.ignore(1000, '\n');
    } 

    // Կատարում ենք թվաբանական գործողությունները 
    int sum = firstNumber + secondNumber; 
    int difference = firstNumber - secondNumber;
    int product = firstNumber * secondNumber; 
    int quotient = firstNumber / secondNumber;

    // Արտածում ենք ստացված արդյունքները
    cout << "Գումար՝ " << sum << endl;
    cout << "Տարբերություն՝ " << difference << endl; 
    cout << "Արտադրյալ՝ " << product << endl; 
    cout << "Քանորդ՝ " << quotient << endl; 

    return 0;
}