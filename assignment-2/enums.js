var Student = /** @class */ (function () {
    function Student(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
