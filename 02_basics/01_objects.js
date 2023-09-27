
// object literals

  const new_sym = Symbol("key1")
 const User ={
     name:"Dinesh",
     full_name:"Dinesh Reddy",
     [new_sym]:"Mykey1",
     age:18,
     location:"bangalore",
     email:"dinesh@google.com",
     isLoggedIn:false,
     lastLoginDays:["Monday","Sunday"]
 }
    // console.log(User["name"])
    // console.log(typeof User[new_sym])

    User.email="dinesh@gvs.com"
    // Object.freeze(User)
    // console.log(User);

    User.greeting= function(){
        console.log("Hello JS User");
    }
    User.greetingTwo= function(){
        console.log(`Hello JS User ,${this.name}`);
    }
    console.log(User.greeting());
    console.log(User.greetingTwo());
     console.log(User);

