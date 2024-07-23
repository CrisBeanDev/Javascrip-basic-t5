console.log(' Dinh nghia ham sort ');
let arr=[1,5,100,20,31]
console.log('check ham sort : ',arr.sort())
//hàm sort giúp sắp xếp thứ tự từ nhỏ đến lớn cho 1 hàm nào đó nhưng nó chỉ hiểu sắp xếp theo alpha B và số nguyên mà thôi .


arr.sort((x,y)=> {
    return x - y ;
}   );
//một thủ thuật nhỏ để sắp xếp đúng theo thứ tự số     

console.log(arr);
console.log( ' check arr : ')