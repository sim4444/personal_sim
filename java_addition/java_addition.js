// let course1 = {code:"1420", name :"Intro to System Administration"}
// let course2 = {code:"1620", name :"Web Fundamental Technologies"}
// let course3 = {code:"1630", name :"Database"}
// let course4 = {code:"1515", name :"Scripting for IT"}
// let course5 = {code:"1310", name :"Technical Mathematics for IT"}

// const courseList = [course1,course2,course3,course4,course5];

// let user_answer = prompt("Please enter a 4-digit number: ");

// console.log(user_answer);
// console.log(alert(user_answer));

// do{
//     user_answer = prompt("Please enter a 4-digit number: ");
// if (user_answer === null && user_answer.length !== 4 || isNaN(user_answer)){
//     console.log(`This entry : ${user_answer} is invalid. Please enter again:`)
// }
// }
// while(user_answer.length !== 4 || isNaN(user_answer))
// {
//     console.log(`${user_answer} is an invalid entry. Please enter again!!`);
//     user_answer = prompt("Please enter a 4-digit number again: ");
// }

// let courseMatch = false;

// for (const item of courseList){
//     if (item.code.includes(user_answer)){
//         console.log(`Yes I am taking the course: ACIT ${item.code} - ${item.name}`);
//         courseMatch = true;
//         break;
//     }
// }
// if(!courseMatch){
//         let new_course = {code:`ACIT:${user_answer}`, name :null};
//         courseList.push(new_course);
//         console.log(`Your new course ${new_course.code} has been successfully added to the courselist`);
// }

// creating a function which return an array of JS objects
function createCourseArray() {
  const arr_courses = [];
  let container_list = document.querySelectorAll("div");
  console.log(container_list);
  for (const container of container_list) {
    let course_name = container.querySelector(".course_code").textContent;
    let date_info = container.querySelector(".item").textContent;
    let course = { code: course_name, date: date_info };
    console.log(course);
    arr_courses.push(course);
    console.log(arr_courses);
  }
  return arr_courses;
}

const arr_courses1 = createCourseArray();

// creating a function which accepts the array as value
function findCourse(array_courses) {
  let user_answer;
  do {
    user_answer = prompt("Please enter a 4-digit number: ")
  } while (user_answer.length !== 4 || isNaN(user_answer));
  let course_match = false;
  for (const course of array_courses) {
    if (course.code.includes(user_answer)) {
      const area = document.getElementById(user_answer);
      console.log(area)
      area.classList.add('change_color')
      course_match = true;
    }
  }
}
findCourse(arr_courses1);
