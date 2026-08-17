//Problem 4
function checkpassword(password) {
    if(password.length < 8) {
        return false;
    }

    let upper = false;
    let lower = false;
    let digit = false;
    
    for(let char of password) {
        if(char >= 'A' && char <= 'z') {
            upper = true;
        }
        if(char >= 'a' && char <= 'z') {
            lower = true;
        }
        if(char >= '0' && char <= '9') {
            digit = true;
        }
    }
    return upper && lower && digit;
}

console.log(checkpassword("Hello123"));
console.log(checkpassword("Hellobabe"));