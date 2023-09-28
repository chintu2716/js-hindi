
  function AddTwoNumbers(num1,num2){
    console.log((num1+num2))
  }
     AddTwoNumbers(5,10)
   

function UserLoggedInMessage(Username="Unknown"){
   
     if(!Username){
        return "Please enter your username"
     }
     return `${Username} just Logged in`
 }

  console.log(UserLoggedInMessage())