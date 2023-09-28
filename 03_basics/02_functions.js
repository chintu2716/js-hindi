
 function addPriceCart(...num1){     //rest operator
    return num1 
 } 

 console.log(addPriceCart(200,500,700,1200));

 const User = {
       name: "dinesh",
       Id:21 
 }
   
   function handleObject(anyObject){
      return (`Username is ${anyObject.name} and Id is ${anyObject.Id}`)
  }

//    console.log(handleObject(User));
   console.log(handleObject(User));

    const newArray =[100,200,400,1000]

     function thirdValue(anyArray){
        return anyArray[2]
     }

     console.log(thirdValue(newArray));