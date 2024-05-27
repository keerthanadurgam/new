interface studentdetails{
    name: string;
    age: number;
    email: string;
    adress: native;
    course: "Javascript"|"Typescript",
}
 interface native{
    city: string;
    state: string;
    pincode: number;

 }
     let adressname: native={
     city:"karimnagar",
     state:"Telangana",
     pincode: 505526,
  }
    let student1: studentdetails={
        name:"keerthana",
        age:18,
        email :"keerthanadurgamm@gmail.com",
        adress: adressname,
        course: "Javascript",
    }
   console.log(student1);
   type studentaddress={
    city: string;
    state: string;
    pincode: number;}

   type newstudent= {
       name: string;
       age: number;
       email: string;
       adress: studentaddress;
   }   
   
      const address: studentaddress={
        city: "jagitial",
        state: "telanga",
        pincode: 505526,
      }
     const student2: newstudent={
        name: "sreeja",
        age: 21,
        email: "sreejaamuda@gmail.com",
        adress: address,

     }
     console.log(student2);

