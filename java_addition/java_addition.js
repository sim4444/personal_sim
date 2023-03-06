const courseList = [c0,c1,c2,c4,c5];
let c0 = {code:"1420", name :"Intro to System Administration"};
let c1 = {code:"1620", name :"Web Fundamental Technologies"};
let c2 = {code:"1630", name :"Database"};
let c4 = {code:"1515", name :"Scripting"};
let c5 = {code:"1116", name :"Business Communication"};
// console.log(user_answer);
// console.log(alert(user_answer));
let user_answer = promt("Please enter a 4-digit number: ");
do{
    user_answer = promt("Please enter a 4-digit number: ");
}while(user_answer.length !== 4 && user_answer === (isNaN)){
    console.log(`This entry : ${user_answer} is invalid. Please enter again:`)

};
for (let item of courseList){
    if (item.code==="1620"){
        console.log(`Yes I am taking the course:ACIT ${item.code} - "Web Fundamental Fundamental"`);
    }
    else{
        let c6={code:"1620", name :"Web Fundamental Technologies"};
        courseList.push(c6);
        console.log(courseList);
    }
};



// else{
//     console.log(alert('Hello'))
// }



// function my_courses(code,name){
//     this.code=code;
//     this.name=name;
// }
// const c0 = new my_courses("ACIT 1420","Intro to System Administration")
// const c1 = new my_courses("ACIT 1620","Web Technologies")
// const c2 = new my_courses("ACIT 1630","Database")
// const c4 = new my_courses("ACIT 1515","Scripting")
// const c5 = new my_courses("COMM 1116","Business Communication")
// console.log(c0);
// console.log(c0);
// console.log(c0);
// console.log(c0);
// console.log(c0);