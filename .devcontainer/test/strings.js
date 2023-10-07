const Name="suraj"

console.log(Name)
console.log(typeof Name)

const gname=new String("boombox")

console.log(gname[3])       //output will be m
console.log(gname.__proto__)//output will be empty {}
console.log(gname.indexOf("b")) //first occourence of b in gname
console.log(gname.charAt(3))    //char at 3rd index
console.log(gname.charAt("o"))  //accepted but output will always be 0th char
console.log(gname.substring(2,7))//substring 2 to 6th index

console.log(gname.slice(-7,-2))  //slice supports (-)tive indexing
console.log(gname.slice(-7,4))   //output will be boom

console.log(gname.replace('b','d')) //it replaces first occourence of replacing char
console.log(gname.startsWith('b'))  //true
console.log(gname.endsWith("x"))    //true
console.log(gname.lastIndexOf("box"))//last index ==first index of substring passed into func
console.log(gname.repeat(4))        //repeats the gname 4 times
console.log(gname.toLowerCase())
console.log(gname.toUpperCase())
console.log(gname.includes("box"))