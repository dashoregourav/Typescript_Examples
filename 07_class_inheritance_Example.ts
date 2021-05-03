class Student{
    name:string;age:number;email:string;
    constructor(name:string,age:number,email:string){
        this.name=name,
        this.age=age,
        this.email=email
    }
    getBioData():string{
        return `My name is ${this.name}.My Age is ${this.age}.My email is ${this.email}`;
    }
}
// let obj1=new Student("gourav",22,"gourav@email.com");
// console.log(obj1.getBioData());
class Player extends Student {
    game:string;
    constructor(name:string,age:number,email:string,game:string){
        super(name,age,email);
        this.game=game;
    }
    getPlayerData():string{
        return `${super.getBioData()} And My Favourite Game is ${this.game}.`;
    }
}

let obj2=new Player("yash",15,"yash@gmail.com","Football");
console.log(obj2.getPlayerData());