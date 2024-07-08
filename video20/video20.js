console.log('Dinh Nghia callbacks, settimeout và setinterval ');
//Bản chất của callbacks là giúp code js chạy theo tuần tự , khắc phục tình trạng bất đồng bộ ngôn ngữ

let sum=(a,b,callback)=>{
    let tong=a+b;
    //hàm setTimeout có thể hiểu nôm na là chạy 1 vòng lặp có thời gian delay khởi tạo
    setTimeout(() => {
        callback(tong);
    },5000)
    
    let i=0;
    //hàm setInterval có thể hiểu nôm na là chạy 1 vòng lặp vô hạn cứ sau mỗi thời gian delay khởi tạo
    let timer= setInterval(() => {
        callback(tong);
        i++;
        if(i===5){
            //hàm clearInterval sinh ra để xóa đi vòng lặp vô hạn của Interval với điều kiện thỏa mãn khởi tạo nào đấy thì vòng lặp sẽ dừng
            clearInterval(timer);
        }
        
    },1000);
    console.log('check i : ',i);
}


let printsum = (message)=>{
    console.log('check sum ',message)
   
}
sum(6,9,printsum)