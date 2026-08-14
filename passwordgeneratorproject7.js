// Exercise 7 - Password Generator
// Create a javscript program capable of generating a password which contains atleast one lowercase,one uppercase and one special characters.Create a password class to acheive the Same.
class Password {

    constructor(length) {
        this.length = length;

        this.lowercase = "abcdefghijklmnopqrstuvwxyz";
        this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.numbers = "0123456789";
        this.special = "!@#$%^&*()_+";
    }

    generatePassword() {

        // Make sure password is at least 3 characters
        if (this.length < 3) {
            return "Password length must be at least 3";
        }

        // Select one character from each required category
        let password = "";

        password += this.getRandomCharacter(this.lowercase);
        password += this.getRandomCharacter(this.uppercase);
        password += this.getRandomCharacter(this.special);

        // All possible characters
        let allCharacters =
            this.lowercase +
            this.uppercase +
            this.numbers +
            this.special;

        // Fill remaining characters
        for (let i = 3; i < this.length; i++) {
            password += this.getRandomCharacter(allCharacters);
        }

        // Shuffle the password
        password = this.shuffle(password);

        return password;
    }

    getRandomCharacter(characters) {
        let randomIndex = Math.floor(
            Math.random() * characters.length
        );

        return characters[randomIndex];
    }

    shuffle(password) {
        let characters = password.split("");

        for (let i = characters.length - 1; i > 0; i--) {

            let randomIndex = Math.floor(
                Math.random() * (i + 1)
            );

            [characters[i], characters[randomIndex]] =
                [characters[randomIndex], characters[i]];
        }

        return characters.join("");
    }
}


// Create an object
let passwordGenerator = new Password(12);

// Generate password
let password = passwordGenerator.generatePassword();

console.log("Generated Password:", password);
