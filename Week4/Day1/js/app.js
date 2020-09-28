// 1. Create a Palindrome app in Javascript which will console.log whether a string is a palindrome or not
// 2. Create an app which removes duplicates from an array 
// 3. Create an app whichs returns true/false depending on if the item is in the array 
// 4. Create an app which finds the largest number in an array 
// 5. Create an app which finds the smallest number in an array 
// 6. Create FizzBuzz app 
// 7. Create an app which determines whether the number is even or odd. 
// 8. Take the array [3,4,5, 6,7,8,1] and sort them in ascending and descending order. 
// 9. In this assignment you are going to test your knowledge of class composition. 
// Your task is to create a class which represent a "Bank Account". The Bank Account will have the following properties. 

// Bank Account: 
// - First Name
// - Last Name
// - Middle Name
// - Account Type 
// - Balance 
// - Status (Opened/Closed/Freeze) 

// Here are the features that needs to be implemented: 
// - A user should be able to open a bank account provided they have the initial balance of $100
// - User should be able to transfer money from one bank account to another  
// - A user should be able to withdraw money from the bank account 
// - The app should charge $-35 fees if the bank account is below $0

// 1

// function checkPalindrome() {
//     palindrome = window.prompt("Type in a word to see if it's a palindrome! ")
//     palindrome = String(palindrome)
    
//     letters = []
//     letters_reverse = []

//     for (i = 0; i < palindrome.length; i++) {
//         letters.push(palindrome[i])
//     }

//     for (i = 0; i < palindrome.length; i++) {
//         letters_reverse.push(palindrome[i])
//     }

//     if (letters == letters_reverse) {
//         console.log("It's a palindrome!")
//     } else {
//         console.log("Not a palindrome.")
//     }
// }

// checkPalindrome()

// 2

// names = ["Alex","John","Mary","Steve","John", "Steve"]
// console.log(names)

// function deleteDuplicates(array) {
//     for (i = 0; i < names.length; i++) {
//         let name = array[i];
//         let times = 0;
//         for (j = 0; j < names.length; j++) {
//             if (array[j] == array[i]) {
//                 times++;
//             }
//         if (times > 1) {
//             index = array.indexOf(array[i])
//             array.pop(index)
//         }
//         }
//     }
// }
// deleteDuplicates(names)
// console.log(names)

// 3

// let new_array = ["apples", "oranges", "pineapples"]

// function inArray(array, item) {
//     return console.log(array.includes(item))
// }

// inArray(new_array, "pears")
// inArray(new_array, "apples")

// 4

// let numArray = [8, 99, 23, 36, 72, 54];

// function largestNum(array) {
//     num = 0;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > num) {
//             num = array[i];
//         }
//     }
//     return num
// }

// console.log(largestNum(numArray))

// 5

// let numArray = [8, 99, 23, 36, 72, 54];

// function smallestNum(array) {
//     num = 100;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] < num) {
//             num = array[i];
//         }
//     }
//     return num;
// }

// console.log(smallestNum(numArray))

// 6

// function fizz_buzz(num) {
//     num = parseFloat(num)
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("Fizz Buzz")
//     } else if (num % 3 == 0 && num % 5 != 0) {
//         console.log("Fizz")
//     } else if (num % 3!= 0 && num % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log("No fizzes or buzzes for you.")
//     }
// }

// fizz_buzz(9)
// fizz_buzz(10)
// fizz_buzz(15)


// 7

// function evenOdd(num) {
//     num = parseFloat(num);
    
//     if (num % 2 === 0) {
//         console.log("Even!");
//     } else {
//         console.log("Odd!");
//     }
// }

// evenOdd(12)
// evenOdd(23)

// 8

// let numArray = [3, 4, 5, 6, 7, 8, 1]

// function incArrays(array) {
//     incArray = [];

//     for (i = 0; i < array.length; i++) {
//         incArray.push(array[i]);
//     }

//     for (i = 0; i < incArray.length; i++) {
//         let swapped = false;
//         for (j = 0; j < incArray.length; j++) {
//             if (incArray[i] < incArray[j]) {
//                 first = incArray[i];
//                 second = incArray[j];
//                 incArray[i] = second;
//                 incArray[j] = first;
//                 swapped = true;
//             }
//         }
//        if (swapped = false) {
//            break;
//        }
//     }
//     return incArray
// }

// function decArrays(array) {
//     decArray = [];

//     for (i = 0; i < array.length; i++) {
//         decArray.push(array[i]);
//     }


//     for (i = 0; i < decArray.length; i++) {
//         let swapped = false;
//         for (j = 0; j < decArray.length; j++) {
//             if (decArray[i] > decArray[j]) {
//                 first = decArray[i];
//                 second = decArray[j];
//                 decArray[i] = second;
//                 decArray[j] = first;
//                 swapped = true;
//             }
//         }
//        if (swapped = false) {
//            break;
//        }
//     }

//     return decArray
// }

// console.log(incArrays(numArray))
// console.log(decArrays(numArray))

// 9

// class BankAccount {
//     constructor(first, middle, last, balance, accountType) {
//         this.firstName = first;
//         this.middleName = middle;
//         this.lastName = last;
//         this.balance = balance;
//         this.accountType = accountType;
//         this.status = "opened"; // (Opened/Closed/Freeze)
//     }

//     deposit(amount) {
//         if (status == "opened") {
//             this.balance += amount;
//             console.log(`Your account now has $${this.balance}`);
//         } else {
//             return("Your account must be open to do that.")
//         }
//     }

//     transfer(amount, first, last, accountType) {
//         if (status == "opened") {
//             this.balance -= amount;
//             return console.log(`Your account now has $${this.balance}, and $${amount} will be transferred to ${first} ${last}'s ${accountType} account.`), this.overdraftFee()
//         } else {
//             return("Your account must be open to do that.")
//         }
//     }

//     withdraw(amount) {
//         if (status == "opened") {
//             this.balance -= amount;
//             console.log(`Your account now has $${this.balance}`), this.overdraftFee();
//         } else {
//             return("Your account must be open to do that.")
//         }
//     }

//     overdraftFee() {
//         if (this.balance < 0) {
//             this.withdraw(35)
//             return console.log(`Overdraft! Balance is now: $${this.balance}`)
//         }
//     }
// }

// function openAcc() {
//     var user_balance = window.prompt("Thank you for opening an account! What is your initial deposit? ")
//     user_balance = parseFloat(user_balance)
//     if (user_balance > 100) {
//         var first = window.prompt("Enter first name: ")
//         var middle = window.prompt("Enter middle name: ")
//         var last = window.prompt("Enter last name: ")
//         var user_type = window.prompt("Enter account type: ")

//         let acctName = first + last + user_type

//         acctName = new BankAccount(first, middle, last, user_balance, user_type)

//     } else {
//         return console.log("We're sorry. You must have a minimum of $100.")
//     }
    
// }

// openAcc()



