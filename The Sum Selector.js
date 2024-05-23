/*  Question 
        The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number.
         Write a function that performs this summation.  */


// First Approach (Complex Approach)
let arr = [1, 2, 3, 4, 5, -2, 5, 3, 8]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < 0) {
            break;
        }
    }
    sum = sum + arr[i]

}
console.log(sum)



// Second Approach (Better Approach)
let sum2 = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i]<0) break;
    else sum2 = sum2 + arr[i]
}
console.log(sum2)

