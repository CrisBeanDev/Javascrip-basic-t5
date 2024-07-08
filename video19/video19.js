console.log('SU KHAC NHAU GIUA FUNCTION VA METHOD');


let obj={
    name:'Bean',
    adress:'Hoi An',
    getname: function(){
        return this.name;

    }
}
console.log('tim ten obj ',obj.getname(),obj.name,obj.adress)