var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = {
    name: "keerthana",
    age: 21,
    email: "chitty @ gmail.com",
    state: "telangana",
    pincode: 505526,
};
var newobject = {
    name: "hello",
    email: "keerthana@ gmail.com",
};
function updatenew(_hello, _newobject) {
    return __assign(__assign({}, _hello), _newobject);
}
var updated = updatenew(hello, newobject);
console.log(updated);
var Employee1 = {
    id: 20009,
    age: 47,
    name: "Ranga",
};
var employee2 = {
    name: "keerthana",
    age: 21,
    id: 45565,
    Lead: Employee1,
};
var employee3 = {
    name: "anusha",
    age: 21,
    id: 23674,
    Lead: Employee1,
};
var array = [Employee1, employee2, employee3];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    if (key.Lead) {
        console.log(key.name + " is not lead");
    }
    else {
        console.log(key.name + " is lead");
    }
}
