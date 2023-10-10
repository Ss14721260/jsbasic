const mcu=['spiderman','thor','Ironman','dr.strange']
const dc=['flash','superman','batman']
// mcu.push(dc)
// console.log(mcu)//whole array treated as an element
// now let so concat/
allheros=mcu.concat(dc)
console.log(allheros)
// one another way is 
alnh=[...mcu,...dc]
console.log(alnh)
// now lets do something of flat()
ar=[1,2,[3,4,5],6,[7,8,9,[1,2,3,4]]]
console.log(ar.flat(Infinity))

// array from given object of string
console.log(Array.from([123,4,5])) //working
console.log(Array.from(123)) //empty array will be generated
console.log(Array.from("array from string")) //working