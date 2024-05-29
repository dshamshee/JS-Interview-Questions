/* Question 
    The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts 
    that takes an array of product objects and a filter criterion. The function should return a new array containing only 
    the products that match the filter criterion.  */

   
    let arr = [
        {
          id: 1,
          name: "Laptop",
          category: "Electronics",
          price: 80000,
          rating: 4.5
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 500,
          rating: 4.0
        },
        {
          id: 3,
          name: "Coffee Maker",
          category: "Home Appliances",
          price: 7500,
          rating: 4.2
        },
        {
          id: 4,
          name: "Headphones",
          category: "Electronics",
          price: 680,
          rating: 3.8
        },
        {
          id: 5,
          name: "Running Shoes",
          category: "Footwear",
          price: 930,
          rating: 4.7
        },
        {
          id: 6,
          name: "Smartphone",
          category: "Electronics",
          price: 18000,
          rating: 4.6
        },
        {
          id: 7,
          name: "Blender",
          category: "Home Appliances",
          price: 10000,
          rating: 4.1
        },
        {
          id: 8,
          name: "Jeans",
          category: "Clothing",
          price: 750,
          rating: 4.3
        },
        {
          id: 9,
          name: "Watch",
          category: "Accessories",
          price: 1900,
          rating: 4.4
        },
        {
          id: 10,
          name: "Sneakers",
          category: "Footwear",
          price: 1250,
          rating: 4.5
        },
        {
            id: 11,
            name: "Watch",
            category: "Accessories",
            price: 1500,
            rating: 4.5
          }
      ];

      function filterProducts(ArrayOfproduct, Criteria){
        let rs = []
          ArrayOfproduct.forEach(element => {
            if(element.name === Criteria || element.category === Criteria || element.price === Criteria || element.rating === Criteria ) {
                 rs.push(element)
                 }  
          });
           return rs
      }

console.log(filterProducts(arr,"Sneakers"))
     