const user = {
    username:"dinesh",
    price:999,

    welcomeMessage: function(){
        //   console.log(`${this.username} ,welcome to this page`);
        //   console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// console.log(this);

 function chai(){
    let username="Dinesh"
    console.log(this);
 }

 chai()

// ********************************ArrowFunction*********************************
const addTwoNum = (num1,num2)=> {
   return (num1+num2)
}
const subTwoNum = (num1,num2)=>{return (num1-num2)}
const mulTwoNum = (num1,num2)=> (num1*num2)

console.log(addTwoNum(1,4));
console.log(subTwoNum(10,4));
console.log(mulTwoNum(20,5));

const divTwoNum = (num1,num2)=> ({username:"dinesh"})
console.log(divTwoNum(2,3));


