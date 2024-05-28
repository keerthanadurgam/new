var person = {
    name: "sai",
    age: 35,
    land: "2 acres",
    fathername: "venu",
    gender: "male",
    Adress: {
        village: "kothapet",
        district: "karimnagar",
        pincode: 505526,
    }
};
var myarray = [];
var util;
(function (util) {
    function personname(person1) {
        for (var key in person1) {
            if ((typeof person1[key]) === "object") {
                personname(person[key]);
            }
            else {
                myarray.push('${key}: ${person[key]}');
            }
        }
        return myarray;
    }
    util.personname = personname;
    util.personname(person);
    var values = myarray.join(" , ");
    console.log(values);
})(util || (util = {}));
