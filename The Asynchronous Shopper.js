/* Question 
    The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder
     that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message
      after a random delay.  */


// First Approach (Reduce Line of Code) Prefered 
async function placeOrder(){
    return new Promise((resolve, reject)=>{
        let randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000 and 6000 milliseconds
        setTimeout(() => {
            resolve("Orader Placed Successfully !")
        }, randomDelay);
    })
}
placeOrder().then((responce)=> console.log(responce))



// Second Approach (Proper Explained)
// async function placeOrder2(){
//     const order = new Promise((resolve, reject)=>{
//         let randomDelay = Math.floor(Math.random() *5000) + 1000
//         setTimeout(() => {
//             resolve("Your Orader Placed Successfully !")
//         }, randomDelay);
//     })
//     return order
// }
// placeOrder2().then((responce)=> console.log(responce))