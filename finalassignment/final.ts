type native2={
    village: string;
    district?: string;
    pincode?: number;
}
type farmer={
    name: string;
    age: number;
    land: string;
    fathername?: string;
    gender?: "male"| "female";
    Adress:native2;
}
type mergeType<Type> = {
    [P in keyof Type]-?: Type[P];
}
type farmer1 =mergeType<farmer>;

const person: farmer1={
    name: "sai",
    age: 35,
    land: "2 acres",
    fathername:"venu",
    gender:"male",
    Adress: {
        village: "kothapet",
        district:"karimnagar",
        pincode: 505526,
    }
}

let myarray:string[]= [];
namespace util
{
export function personname( person1: object): string[]{
    for(let key in person1)
    {
        if((typeof person1[key]) === "object"){
            personname(person[key]);
        }
        else{
            myarray.push('${key}: ${person[key]}');
        }
    }
        return myarray;
 }
       util.personname(person);
       let values = myarray.join(" , ");
       console.log(values);
}