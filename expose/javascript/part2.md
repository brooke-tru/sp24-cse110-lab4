1. 3 because "var" has no block scope, it is function-scoped or global-scoped."i" maintains the most recent value that it obtained. 
2. 150 because "var" has no block scope, it is function-scoped or global-scoped. "discountedPrice" maintains the most recent value that it obtained. 
3. 150 because "var" has no block scope, it is function-scoped or global-scoped. "finalPrice" maintains the most recent value that it obtained. 
4. [ 50, 100, 150 ] because the for loop did a calculation on the input and stored the calculation into "discounted" array.
5. Error because the variable i is only accessible within the for () {...} code block. let "i" has a block scope.
6. Error because the variable discountedPrice is only accessible within the for () {...} code block. let "discountedPrice" has a block scope.
7. 150 since "finalPrice" was declared in the scope of the function, it maintained its most recent calculation.
8. [ 50, 100, 150 ] because the discounted array was declared in the scope of the function and was able to maintain the data that it received in the for loop. 
9. Error because the variable i is only accessible within the for () {...} code block.
10. 3 because "length" was declared with the value prices.length, and never attempted to reassign. 
11. [ 50, 100, 150 ] because the "discounted" is allowed to be manipulated. It just can't be reassigned. 
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. arithmetic
    1.  '32' because this was read as a concatenation operation between '3' and type converted 2 to '2'
    2.  1 because this was read as an arithmetic operation between type converted '3' to 3 then subtracting 2. That's because '-' is not a string operation.
    3.  3 because null became 0 to perform arithmetic 
    4.  '3null' because '+' was treated as string concatenation and null was converted to its exact string representation 'null'
    5.  4 because true converted into the integer 1 to perform arithmetic
    6.  0 because false converted into a 0 and null is also a 0 in arithmetic.
    7.  '3undefined' because undefined was converted into iots string representation and concatenated with '3'
    8.  NaN because '-' is an arithmetic operation, so undefined became NaN.
14. Comparison
    1.  true because '2' got converted into an integer, and 2 is greater than 1
    2.  false because strings get compared letter-by-letter in the "dictionary" order, and '2' is greater than '1' as strings 
    3.  true because string '2' becomes integer 2
    4.  false because it checked equality without type conversion. Since 2 and '2' are different types, it automatically returned false.
    5.  false because it can only be true if it is 1
    6.  true because Boolean(2) is true, so true is equivalent to true. 
15. '==' is equality operator which does a type conversion before comparison. '===' does NOT do a type conversion before comparison, so it will return false right away if the types don't match.
16. in .js file
17. [ 2, 4, 6] because modify passes that array [1,2,3] to doSomething and pushes the multiplied number to the newArr
18. in .js file
19. 1 4 3 2