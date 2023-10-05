// *************************IIFE(Immediately Invoked Function Expression)******************************

function chai(){
    console.log(`DB connected`);
}

chai();

(function chai1(){
    console.log(`DB connected in iife format`);
})();

((name)=>{
    console.log(`DB connected in iife in arrow fn with name as ${name}`);
})("dinesh")
