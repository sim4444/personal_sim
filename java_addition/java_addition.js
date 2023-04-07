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
//     if (user_answer === null && user_answer.length !== 4 || isNaN(user_answer)){
//         console.log(`This entry : ${user_answer} is invalid. Please enter again:`)
//     }
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
  for (container of container_list) {
    let course_name = container.querySelector(".course_code").textContent;
    let date_info = container.querySelector(".item").textContent;
    let course = { code: course_name, date: date_info };
    console.log(course);
    arr_courses.push(course);
    console.log(arr_courses);
  }
  return arr_courses;
}

const array_courses = createCourseArray();

// creating a function which accepts the array as value
function findCourse(array_courses) {
  do {
    user_answer = prompt("Please enter a 4-digit number: ");
    if (
      (user_answer === null && user_answer.length !== 4) ||
      isNaN(user_answer)
    ) {
      console.log(
        `This entry : ${user_answer} is invalid. Please enter again:`
      );
    }
  } while (user_answer.length !== 4 || isNaN(user_answer));
  let courseMatch = false;

  //     for (const item of courseList){
  //         if (item.code.includes(user_answer)){
  //             console.log(`Yes I am taking the course: ACIT ${item.code} - ${item.name}`);
  //             courseMatch = true;
  //             break;
  //         }

  //     }
  //     if(!courseMatch){
  //             let new_course = {code:`ACIT:${user_answer}`, name :null};
  //             courseList.push(new_course);
  //             console.log(`Your new course ${new_course.code} has been successfully added to the courselist`);
  //     }
}
findCourse();

// console.log(courseList)

// createCourseArray function
// function createCourseArray() {
//     const courseElements = document.querySelectorAll('.course'); // get all elements with class "course"
//     const courses = []; // initialize empty array for courses

//     courseElements.forEach(element => {
//       const courseName = element.querySelector('.course-name').textContent; // get course name
//       const courseDate = element.querySelector('.course-date').textContent; // get course date
//       const courseCodeMatch = courseName.match(/(\d{4})/); // extract 4-digit course code from course name using regex

//       if (courseCodeMatch) { // if a 4-digit course code was found
//         const courseCode = courseCodeMatch[0]; // extract course code from regex match
//         const courseObject = { code: courseName, date: courseDate }; // create course object
//         courses.push(courseObject); // add course object to courses array
//       }
//     });

//     return courses; // return courses array
//   }

//   // findCourse function
//   function findCourse(courseList) {
//     let courseCode;

//     do { // loop to get valid 4-digit course code from user
//       courseCode = prompt("Please enter a 4-digit course code:");
//     } while (!/^\d{4}$/.test(courseCode)); // repeat prompt if input is not a 4-digit number

//     let courseFound = false; // initialize variable to track if course was found

//     courseList.forEach(course => {
//       if (course.code.includes(courseCode)) { // if course code matches input
//         const matchingElement = document.querySelector(`.course-name:contains('${course.code}')`).parentElement; // find element with matching course name
//         matchingElement.style.backgroundColor = 'green'; // change background color of matching element to green
//         courseFound = true; // set courseFound to true
//       }
//     });

//     if (!courseFound) { // if course was not found
//       const newCourse = document.createElement('div'); // create new element
//       newCourse.classList.add('course'); // add class "course"
//       newCourse.innerHTML = `
//         <h3 class="course-name">${courseCode} - N/A</h3>
//         <p class="course-date">Fall 2020</p>
//       `; // set innerHTML of new element
//       document.querySelector('.courses-container').appendChild(newCourse); // add new element to courses container
//     }
//   }

//   // usage example
//   const coursesArray = createCourseArray(); // create courses array from HTML elements
//   findCourse(coursesArray); // find and highlight or add course based on user input
