const num = [1,2,3]

// const sum = num.reduce(function (acc,cur){
//  return (acc+cur)
// },0)
// console.log(sum);

// const sum = num.reduce((acc,cur)=>(acc+cur),0)
// console.log(sum);

const shoppingKart = [
    {
        Course_name:"Js",
        course_price:1000
    },
    {
        Course_name:"python",
        course_price:2000
    },
    {
        Course_name:"Data Science",
        course_price:3000
    },
]
 const total_payable = shoppingKart.reduce((acc,cur)=> acc+(cur.course_price),0)
   console.log(total_payable);
