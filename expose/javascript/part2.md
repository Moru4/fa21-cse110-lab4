1. 3 will be printed. This is because the scope of i is the whole function and the value of i after the for loop ends is 3.
2. 150 will be printed because the scope of discountedPrice is the whole function, so it can be accessed after the for loop and its value after the for loop will be 150.
3. 150 will be printed beause the scope of finalPrice is the whole function, so it can be accessed anywhere in the function and its value will be 150.
4. The function will returnin an array containing the discounted prices of the prices in the array from the parameter.
5. The code will cause an error because the scope of i is only the block it was defined in. i was defined in the for loop, so it cannot be accessed after the for loop.
6. The code will cause an error because the scope of discountedPrice is only the block it was defined in. discountedPrice was defined in the for loop, so it cannot be accessed after the for loop.
7. 150 will be printed because line 14 is still in the scop of finalPrice. They are both in the same block.
