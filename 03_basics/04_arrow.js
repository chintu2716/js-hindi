const user = {
    username:"dinesh",
    price:999,

    welcomeMessage: function(){
          console.log(`${this.username} ,welcome to this page`);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);
