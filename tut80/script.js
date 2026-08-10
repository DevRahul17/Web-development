let obj = {
    a: 1,
    b: "Rahul",
    c: "Kumar"
}

console.log(obj);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;//sets rabbit.[[Prototype]] = animal

//Classes
class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...");
    }

    eats(){
        console.log("Eating!");
    }

    jumps(){
        console.log("Jumping");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created with lion...");
    }

    eats(){
        console.log("Lion Eating");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

class User{
    constructor (name) {
        //Invokes the setter
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4) {
            console.log("Name is too short...");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name);

user.name = "Harry";
console.log(user.name);