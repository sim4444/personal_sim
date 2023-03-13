let course1 = {code:"1420", name :"Intro to System Administration"};
let course2 = {code:"1620", name :"Web Fundamental Technologies"};
let course3 = {code:"1630", name :"Database"};
let course4 = {code:"1515", name :"Scripting for IT"};
let course5 = {code:"1310", name :"Technical Mathematics for IT"};

const courseList = [course1,course2,course3,course4,course5];

let user_answer = prompt("Please enter a 4-digit number: ");

// console.log(user_answer);
// console.log(alert(user_answer));

// do{
//     user_answer = prompt("Please enter a 4-digit number: ");
//     if (user_answer === null && user_answer.length !== 4 || isNaN(user_answer)){
//         console.log(`This entry : ${user_answer} is invalid. Please enter again:`)
//     }
// }
while(user_answer.length !== 4 || isNaN(user_answer)){
    console.log(`${user_answer} is an invalid entry. Please enter again!!`);
    user_answer = prompt("Please enter a 4-digit number again: ");
};
for (let item of courseList){
    if (item.code.includes(user_answer)){
        console.log(`Yes I am taking the course: ACIT ${item.code} - ${item.name}`);
    }
    break
};
if(item.code!==user_answer){
        let new_course = {code:user_answer, name :null};
        courseList.push(new_course);
        console.log(`Your new course #${user_answer}has been successfully added to the courseList`);
};
