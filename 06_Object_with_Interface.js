var user = {
    name: "gourav",
    age: 22,
    city: "Khandwa",
    getuser: function () {
        return "name:" + user.name + " , age:" + user.age + " , city:" + user.city + " ";
    }
};
console.log(user.getuser());
