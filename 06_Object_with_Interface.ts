interface userType{
    name:string,
    age:number,
    city:string
    getuser:()=>string;
}
let user:userType={
    name:"gourav",
    age:22,
    city:"Khandwa",
    getuser :()=>{
        return `name:${user.name} , age:${user.age} , city:${user.city} `;
    }
}
console.log(user.getuser());
