//for of loop
superheros=['batman','superman','flash','fisherman','wonderwomen']
for (const elements of superheros) {
    // console.log(elements);
}
//for in loop
for (const i in superheros) {
    if (superheros.hasOwnProperty.call(superheros, i)) {
        const element = superheros[i];
        // console.log('#',element);
        
    }
}
// Note that .hasOwnProperty.call function  is not know for me at this position
 
const student={
    name:'suraj',
    age:21
}
//object is not iterable from (for of loop)
// for (const data of student) {
//     console.log(data);
// }

//map  is like singleton object
const singletonStudent=new Map();
singletonStudent.set('name','suraj singh');
singletonStudent.set('age',21);
console.log(singletonStudent);
singletonStudent.set('sex','Male')
console.log(singletonStudent);
for (const [i,j] of singletonStudent) {
    console.log(i,'=>',j); 
}

//object iterations using (for in) method
computerlanguages={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const k in computerlanguages) {
    console.log(k,'=',computerlanguages[k])       
}

//
