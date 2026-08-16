//Problem 1
function houseassign(students) {
    let houses = [];

    for (const student of students) {
        let house;
        if (student.length < 6) {
            house = "Blue";
        }
        else if (student.length < 8) {
            house = "Green";
        }
        else if (student.length < 12) {
            house = "Red";
        }
        else {
            house = "Yellow";
        }
        houses.push(`${student} - ${house}`);
    }
    return houses;
}

let students = ["Rahul", "Shanealia", "Dharmanshu", "Aditya", "Abhi", "Faizan", "Mehraan", "Harsh", "Yash", "Vikas", "Kirti", "Janvi", "Bhumika", "Siddharth", "Manual", "Manish", "glennphilips", "shikhardhawan", "shubmangill"];

console.log(houseassign(students));