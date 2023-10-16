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

//freeze method on objects
//overwriting objects elements
jsuser.age=23
Object.freeze(jsuser)//now any changes in jsuser object will not be propgated
jsuser.age=25
console.log(jsuser)
/* this will be output 
{
  name: 'suraj',
  age: 23,
  location: 'Delhi',
  Email: 'ssingh.8721382@gmail.com',
  islogedin: false,
  lastLogedinDays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'mykey1'
}

we can see symbol and agechanged to 23 but not agail change in 25 because of Freeze method applied
*/