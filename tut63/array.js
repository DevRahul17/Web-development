console.log("It is a tutorial of an array");

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
//console.log(arr[5]);//Undefined
//Arrays are mutable we can change elements after

arr[0] = 17;
arr[1] = "Rahul";
console.log(arr);
console.log(typeof arr);
console.log("Length of an array is ",arr.length);

let a = [9,5,7,8,4];
console.log(a.toString());//Convert array to string
console.log(a.join( "-" ));//join - and replace comma

a.pop();//put last element out
console.log(a);

a.push(17);//Insert new element at last
console.log(a);

a.shift();//Removes first element and like bro of pop
console.log(a);

a.unshift();//Insert first element at beginning and like bro of push
console.log(a);

let b = [1,5,10];
console.log(b);
delete b[0];//Delete elements from an array
console.log(b);

let c = [11,2,8];
let d = [5,18,17];
let e = [50,188,187];
//Join arrays
console.log(c.concat(d,e));

let x = [7,2,8];
console.log(x.sort());//For sorting

const numbers = [1,2,3,4,5,6,7];
console.log(numbers.splice(2,1,23,24));

const num = [3,6,9,12];
//Slice out and create a new array
//console.log(num.slice(1));//Here 1 means 1st item out
console.log(num.slice(1,3));

let ar = [1,2,3,4,5];

for(let i = 0;i < ar.length;i++){//For loop
    const element = ar[i];
    console.log(element);
    //console.log(ar[i]);
}

ar.forEach((value,i,ar)=>{//For each syntax
    console.log(value,i,ar);
})

let obj  = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

for (const value of ar) {
    console.log()
}

let array1 = [12,33,4,66,9];
let newarr = [];

for (let i = 0;i < array1.length;i++){
    const element = array1[i];
    newarr.push(element**2);
}

console.log(newarr);

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))