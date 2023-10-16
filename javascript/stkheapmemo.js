// stack memory is used to store primitive datatypes data
//for example
a='suraj'
b=a         //b has the copy of a
b='raj'     //change in b will not affect a because a,b are the primitive datatypes
console.log(a)  //output will be suraj
console.log(b)  //output will be raj

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Heap memory is used to store non-primitive datatypes
//for example
a=[1,2,3,4,5]
b=a                 //b and a both refering to the same array in heap memory
b=[7,8,9,10]        //now b is refering to another array so change in b will
//                     not affect a
console.log(a)
console.log(b)

/*now if c=b refering the same array and changing in c data not whole c then 
    the changes will be affect b also*/

c=b
c.pop()
console.log(b)//[ 7, 8, 9 ] will be output

console.log(c)//[ 7, 8, 9 ] will be output