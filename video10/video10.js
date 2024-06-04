console.log('Hi the weekend of frilday'.toUpperCase());
let a = 5;
let b ='5';
let Teambuilding = [
    {name:'Tuan' , age:22,gender:'female'},
    {name:'Nga', age: 21, gender: 'male'},
    {name:'Hoang', age:19, gender:'female'}

]
//empty vs null vs undefined (hiểu nôm na empty là khai báo 1 biến có giá trị rỗng vd : let a=''or[]...
//null là một object có giá trị là rỗng mà không được lưu trữ trong bất kì địa chỉ bộ nhớ nào )
//undefined là khai báo một biết mà không gắn giá trị.
let testlet;
console.log(testlet)
console.log(typeof testlet)
let testnull = null
console.log(testnull)
console.log(typeof testnull)
console.log(`type of a: `, typeof a,`type of b: `, typeof b, a===b);
console.log('compare a va b: ','a= ',a,'b= ',b, 'result: ',a===b);
console.log(Teambuilding);
console.log(a+Teambuilding,'diem danh tuan: ', Teambuilding[0])