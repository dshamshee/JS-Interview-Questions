/* Question 
    Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises 
    where each number is multiplied by 2 after a delay of 500 milliseconds.  */


// First Approach (Recomended)
const arr = [1,2,3,4,5]

async function ArrayMapping(arr){
    return arr.map((Element)=>{
        return new Promise((resolve, reject)=>{
            if(Element){
            setTimeout(() => {
                resolve(Element*2)
            }, 500);
        }else {
            reject('Something went wrong')
        }
        });
    });
}

ArrayMapping(arr).then((result)=>{
    Promise.all(result).then((finalResult)=> console.log(finalResult))
})





// Second Approach
// const arr2 = [1,2,3,4,5];

// async function ArrayMapping2(){
//  const mapedArray =   arr2.map((Element)=>{
//         const result = new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(Element*2)
//             }, 500);
//         })
//         return result
//     })
//     return mapedArray
// }
// ArrayMapping2(arr2).then((Response)=>{
//     Promise.all(Response).then((Response)=> console.log(Response))
// })


