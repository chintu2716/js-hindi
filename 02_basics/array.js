

 const newArray = [0,1,2,3,4,5]

 const myn1 = newArray.slice(1,3)
//  console.log("A ",newArray)
 const myn2 = newArray.splice(1,3)
//   console.log("A ",newArray)
//   console.log("B ",myn1)
//   console.log("C ",myn2)

const marvel_heroes=["Thor","Spiderman","Captain America"]
const dc_heroes    =["Batman","Superman","Joker"]

  const new_heroes= marvel_heroes.concat(dc_heroes);

//   console.log(new_heroes) 
  const all_new_heroes = [... marvel_heroes,...dc_heroes]  //spread operator
//   console.log(all_new_heroes);
 
  const other_Array = [1,2,3,[4,5,6],[7,8,[9,10]],11]
const real_other_Array = other_Array.flat(Infinity);
console.log(real_other_Array);

console.log(Array.isArray("hitesh"))
console.log(Array.from("Dinesh"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));