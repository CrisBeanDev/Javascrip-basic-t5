console.log('Dinh nghia Map Arrays - dùng hàm map thay vì for loops');

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (let i=0; i<arr.length ; i++){
    //arr[i]=arr[i] * 2;
    
//}


let mapArr= arr.map((item , index )=>{
   
    return (`<td> ${item} - ${index} </td>`);
})
console.log( 'check arr ', arr)
console.log( 'check maparr ', mapArr)

//sự khác biệt giữa dùng vòng lặp for và map là : lặp for làm thay đổi giá trị của biến ban đầu 
//còn map thì giữ nguyên và tạo ra một mảng mới riêng biệt để thực hiện cv mình muốn. 