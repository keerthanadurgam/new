import { GetItem } from "./generics";
class Student{
    name:string;
    age: number;
    email:string;
   constructor(name:string, age:number, email:string){
    this.name= name;
    this.age= age;
    this.email=email;
   }
   get Name(): string{
       return this.name;
   }
   get Age(): number{
    return this.age;
   }
   get Email(): string{
    return this.email;
   }
}
    interface adress{
        city: string;
        state: string;
        pincode:number;
    }
   interface student1{
       name: string;
       age: number;
       email: string;
       adress: adress;
       
   }
   let Adress : adress={
       city: "karimnagar",
       state: "telangana",
       pincode: 505526,
   }
        let Studentdetails: student1={
            name: "chitty",
            age: 18,
            email: 'chitty@gmail.com',
            adress:Adress,
        } 
        type createReadonly<Type>={
            readonly[p in keyof Type]:Type[p];
        }
        type StudentReadonly = Readonly<Student>
        
