console.log('DINH NGHIA HÀM FILTER VÀ FIND ');

//let arr=[1,2,3,4,5,6,7,8,9];
//filter & find : 
//filter:
let arr=[
    {name:'Bean', age:24},
     {name:'Nghĩa',age:25},
        {name:'Phương',age:28}
]
let find=arr.find((item,index)=>{
   console.log('check item :',arr, 'check index :',index);
    return item&&item.age>25;

})
console.log('check find: ', find)
let filter=arr.filter((item,index)=>{
    console.log('check item : ',arr,'check index : ',index);
    return item&&item.name==='Nghĩa';
})
console.log('check filter : ', filter);