async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(350);
        }, 3500);
    });
}

async function main(){
    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");

    let data = await getdata();
    //await is used for execute this and then go to another function

    console.log(data);

    console.log("Process data");

    console.log("Task 2");
}

main();//Calling main() function

//With fetch()
async function getusers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
}

getusers();