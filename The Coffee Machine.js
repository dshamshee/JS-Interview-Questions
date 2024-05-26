/* Question 
    The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. 
    Write an async function named brewCoffee that takes the type of coffee and returns a promise.
     The promise should resolve with a message indicating that the coffee is ready after a random delay. */



async function brewCoffee(typeOfCoffee){
    const coffee = new Promise((resolve, reject)=>{
        let randomDelay = Math.floor(Math.random() *5000) + 1000  // For Random Delay
        setTimeout(() => {
            resolve(`Your ${typeOfCoffee} is Ready`)
        }, randomDelay);
    })
    return coffee
}
brewCoffee("Cold Coffee").then((Response)=> console.log(Response))
