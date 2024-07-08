console.log('')


for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log('The number is ',i)
 
}
let a=['phap','anh','duc','bo dao nha']
let i=0


while(i<a.length){
    if(a[i]==='bo dao nha'){
        console.log('found it : ',a[i]);
        break;
        //sự khác biệt giữa break và continue: trong 1 vòng lặp có dùng break thì khi nó in được giá trị cần thỏa mãn điều kiện thì tự thoát khỏi vòng lặp và in ra màn hình rồi kết thúc vòng lặp
        //còn continue : khi trong vòng lặp có dùng continue thì khi nó thỏa mãn đc điều kiện trong vòng lặp thì nó tự thoát ra khỏi vòng lặp in ra màn hình và tự động tăng i và chạy tiếp
        
    }
    i++;
}
while(i<a.length){
    //if else condition
    if(a[i].length==3){
        console.log(a[i]);
    }else if(a[i].length==4)
        {
            console.log('top ',i+1,a[i])
        }
  
    i++; 
}
