
/* Question 
    The Vowel Counter: You need to create a function that counts the number of vowels in a given string. 
    Consider both uppercase and lowercase vowels. */

let vowel = ["a","A","E","e","I","i","O","o","U","u"]
let str = "Danish"
let arr = [...str]
let count = 0
let vowelArray = []
function CheckVowel(){
    arr.forEach(e => {
        vowel.forEach(v => {
            if(e==v){
                count++
                vowelArray.push(e)
        }
    });
});
}
CheckVowel()
console.log(count)
console.log(vowelArray)


// Second Approach (Slightly Better Approach) In this Approach I can apply loop directly on String value using For-Of loop
let st = "Danish"
let count2 = 0
let vowelArray2 = []
function CheckVowel2(){
for (const e of st) {
    vowel.forEach(v => {
        if(e===v){
            count2++
            vowelArray2.push(e)
        }
    });
}
}
CheckVowel2()
console.log(count2)
console.log(vowelArray2)