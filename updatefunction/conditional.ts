type Student = {
  name: string;
  age: number;
  email: string;
  state: string;
  pincode: number;
}
let hello: Student = {
  name: "keerthana",
  age: 21,
  email: "chitty @ gmail.com",
  state: "telangana",
  pincode: 505526,
}
type update = Pick<Student, "name" | "email">;
   let newobject: update= {
     name: "hello",
     email: "keerthana@ gmail.com", 
   }

   function updatenew( _hello:Student, _newobject:update):Student{
        return {..._hello, ..._newobject}; 
   }
   const updated=updatenew(hello,newobject);
   console.log(updated);

  type isstring<T>= T extends string? "yes": "No";

type employee={
  id: number;
  age: number;
  name: string;
  Lead?: employee;
}
  let Employee1: employee={
    id: 20009,
    age: 47,
    name: "Ranga",
  }
    let employee2: employee={
      name: "keerthana",
      age: 21,
      id: 45565,
      Lead: Employee1,
    }
    let employee3 : employee={
      name: "anusha",
      age: 21,
      id: 23674,
      Lead: Employee1,
    }
    let array: employee[]=[Employee1,employee2,employee3];
    for(let key of array){
       if(key.Lead){
         console.log(key.name + " is not lead");
       }
       else{
        console.log(key.name+ " is lead");
    }}
   

   