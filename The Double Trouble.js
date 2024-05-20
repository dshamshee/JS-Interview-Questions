
/* Question:  
            The Double Trouble: You are tasked with writing a function that doubles each element in an array. 
            However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.  */

let arr = [1, 5, 3, 4, 7, 9, 6, 5, 2, 7, 8]

// First Approach
let dup1 = arr  // Yaha pe Duplicate Array isiliye banay hai taki Original Array Safe rahe or baki jo bhi manipulation krna ho wo duplicate array me ho 
let doubleArr1 = []
function DoubleArray1(){
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            dup1.splice(j, 1)  // Removing Duplicate element
        }
    }
    doubleArr1.push(dup1[i] * 2)
}
console.log(doubleArr1)
}
DoubleArray1()


// Second Approach 
let dup2 = arr
let doubleArr2 = []
function DoubleArray2(){
arr.forEach((element, index) => {
    //    console.log(`${element} of index ${index}`) 
    if (arr.indexOf(element) !== index) {
        dup2.splice(index, 1)    // Removing Duplicate element
    } 
});
for(let i =0 ; i<dup2.length; i++){
    doubleArr2.push(dup2[i]*2)
}
console.log(doubleArr2)
}
DoubleArray2()