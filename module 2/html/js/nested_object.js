const person = {
        firstName : "John" ,
        lastName : "Deo" ,
        age : 30 ,
        address: {
            street: "123 Main Street" ,
            city : " New York" ,
            state : "NY" ,
            zipCode : "10001"
        },
        occuption : "Engineer"        
};
//Accessing properties  of the main object
console.log(person.firstname);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);

//Accessing the properties of nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);

