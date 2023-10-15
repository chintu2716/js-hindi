const coding = ["js","cpp", "java","c","python"]

// coding.forEach(function (item){
    //  console.log(item);
// })

coding.forEach((val)=>{
    // console.log(val);
})

function printMe(item){
// console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (val,index,arr)=>{
    // console.log(val,index);
    // console.log(arr);
// })

const Lang = [
    {
        L_name:"javascript",
        L_FileName:"js",
        L_RuntimeEnvironment:"node"
    },
    {
        L_name:"java",
        L_FileName:"java"
    },
    {
        L_name:"python",
        L_FileName:"py"
    }
]
 Lang.forEach((item)=>{
console.log(item.L_RuntimeEnvironment);
 })

  