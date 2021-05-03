var Student = /** @class */ (function () {
    function Student(name, age, email) {
        this.name = name,
            this.age = age,
            this.email = email;
    }
    Student.prototype.getBioData = function () {
        return "My name is " + this.name + ".My Age is " + this.age + ".My email is " + this.email;
    };
    return Student;
}());
var obj1 = new Student("gourav", 22, "gourav@email.com");
console.log(obj1.getBioData());
