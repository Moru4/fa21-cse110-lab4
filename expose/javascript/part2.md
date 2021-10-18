1. 3 will be printed. This is because the scope of i is the whole function and the value of i after the for loop ends is 3.
2. 150 will be printed because the scope of discountedPrice is the whole function, so it can be accessed after the for loop and its value after the for loop will be 150.
3. 150 will be printed beause the scope of finalPrice is the whole function, so it can be accessed anywhere in the function and its value will be 150.
4. The function will returnin an array containing the discounted prices of the prices in the array from the parameter.
5. The code will cause an error because the scope of i is only the block it was defined in. i was defined in the for loop, so it cannot be accessed after the for loop.
6. The code will cause an error because the scope of discountedPrice is only the block it was defined in. discountedPrice was defined in the for loop, so it cannot be accessed after the for loop.
7. 150 will be printed because line 14 is still in the scop of finalPrice. They are both in the same block.
8. The function will return the array [50, 100, 150] because it will return an array containing the discounted prices. There will not be any errors because the function does not try to access any variable outside of its scope.
9. The code will ause an error because it attempts to access a variable that cannot be accessed in that line. The scope of i is in the for loop and it cannot be accessed outside the for loop.
10. 3 will be printed because that is the value that length was assigned at the beginning. It does not get changed and line 12 is in the scope of length.
11. The function will return the array of discounted prices [50, 100, 150]. There is no error because the function does not try to access any variable outside of its scope. The values of the variables are also not changed in the function. discountedPrice is reinitialized after every iteration of the for loop.
12.
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]
13.
A. 32  This is the given output because 2 is changed to a string and added to the end of '3'.
B. 1  This is the given output because '3' is changed into an integer to perform subraction.
C. 3  This is the given output because null is mapped to nothing so nothing is added to 3.
D. 3null  This is the given output because null is mapped to the string 'null' and added to the end of the string '3'.
E. 4  This is the given output becuase true is mapped to the integer 1 to perform integer addition.
F. 0  This is the given output because false and null are both mapped to 0.
G. 3undefined  This is the given output becuase undefined is mapped to the string 'undefined' and added to the end of the string '3'.
H. NaN  This is the given output because an operation was performed that involved a string and was not addition. NaN is Not-A-Number.
14.
A. true  This is because the string '2' is mapped to the integer 2 and 2 is greater than 1.
B. false  This is because the strings '2' and '12' are being compared by their ascii values.
C. true  This is because the string '2' is mapped to the integer 2 and 2 is equal to 2.
D. false  This is becuase the integer 2 and the string '2' are not the same type.
E. false  This is because true and the integer 2 are not mapped to the same value.
F. true  This is because Boolean(2) got mapped to true and it was the same data type as true.
15. == converts variables before comparing and === does not convert before comparing.
17. The result of the function will be that the array [2, 4, 6] is returned. A function was passed as a paramter and is called within a function. In line 4, the function doSomething is called to add elements to the array.
19.
1
4
3
2
