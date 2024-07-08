console.log('code with bean - while/do while k=loops'.toUpperCase())
let listname = ['pô','bean','nghĩa','hương']
for( let a= 0;a<listname.length;a++){
    console.log('cau thu so : ', a +1 ,listname[a])
}
let a=0;
//while(a< listname.length){
    console.log('cau thu số : ',a +1, listname[a]);
//    a++;}

do {
    console.log('cau thu số: ', a+1, listname[a]);
    a++;
} while( a < listname.length);
//sự khác nhau giữa vòng lặp while , do-while và for : vòng lặp while chỉ chạy khi thỏa mãn điều kiện , do-while sẽ chạy ít nhất 1 lần nếu như không thỏa mãn điều kiện, vòng lặp for là hay dùng nhất.
//quy luật vòng lặp for : for(1:khai báo biến; 2:điều kiện để thực thi khối code trong vòng lặp ;3:sau khi vòng lặp chạy thì nó sẽ làm gì tiếp theo)