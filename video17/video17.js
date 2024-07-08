console.log('suc manh cua return trong mot function '.toUpperCase());
function getnamebean (x,y,z){
    let a = x+y+z
    console.log(a);
    console.log(x)
    return x + y + z;
    return x;
}
console.log('tinh tong = ',getnamebean(1,2,'bean'))
//console.log(a)=>in ra màn hình bị lỗi a is not undefined vì a nằm trong function ở ngoài hàm thì nó ko còn nhận biết nữa
