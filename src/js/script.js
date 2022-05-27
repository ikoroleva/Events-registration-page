console.log('Hello');
const btn =  document.querySelector(".R_btn")
console.log(btn)
class Person {
    constructor(firstName, lastName, email,phonenumber,age) {
        this.firstName = firstName;
        this.email = email;
        this.lastName = lastName;
        this.phonenumber=phonenumber;
        this.age = age;
    }
 
    getFullName() {
        return `${this.firstName} . ${this.lastName}`;
    }
    getemail(){
        return `${this.email}`
    }
    getphonenumber(){
        return `${this.phonenumber}`
    }
 
    isAdult() {
        return this.age >= 18;
    }
 
    sayHello() {
        console.log(this.isAdult() ? "I'm old enough to participate");
    }
};
 
const simpsons = [
    new Person('', '', '', ),
    new Person('', '', '', ),
    new Person('', '', '', ),
    new Person('', '', '', ),
    new Person('', '', '', ),
];
 
simpsons.forEach((person) => {
    console.log(person.getFullName());
});
 
let adults = simpsons.filter(person => person.isAdult());
console.log(adults);
addEventListener('click',myfunction)