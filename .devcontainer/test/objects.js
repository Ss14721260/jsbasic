//  Singleton
// Object.create

//Objects Literals
const mysymbol=Symbol("key1")
const jsuser={
    name:"suraj",
    age:22,
    [mysymbol]:"mykey1",
    location:"Delhi",
    Email:"ssingh.8721382@gmail.com",
    islogedin:false,
    lastLogedinDays:['monday','saturday']
}
console.log(jsuser.Email)
console.log(jsuser['age'])
console.log(jsuser['Email'])//key of an object is bydefault taken as String**

//symbol declaration in objects
console.log(jsuser[mysymbol])
console.log(typeof jsuser[mysymbol])
