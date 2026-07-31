function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Rahul");
nice("Harry");

function sum(a,b, c = 3){//c is optional and default parameter
    //console.log(a+b);
    return a + b + c;
}

result = sum(5,7);
result1 = sum(1,2,5);
console.log("The sum of a and b is = ",result);
console.log("The sum of a and b is = ",result1);

const func1 = (x)=>{
    console.log("I am an arrow function ", x);
}

func1(5);
func1(15);
func1(52);