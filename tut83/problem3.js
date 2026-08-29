//Problem 3
function mirrorsandappend(str) {
    return str + str.split('').reverse().join('');
}

console.log(mirrorsandappend("rahul"));
// split('') → converts the string into an array of characters.
// reverse() → reverses the array.
// join('') → converts it back into a string.
// str + ... → appends the reversed string to the original.