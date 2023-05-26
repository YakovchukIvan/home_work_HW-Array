"use strict"

let a = 'Ivan';
let b = '777';

const person = new User(a, b);
console.log("person:", person)
console.log("person.username:", person.username)
console.log("person.validatePassword()", person.validatePassword());

let firstStudent = new Student(a, b, 'Vist');
console.log("firstStudent:", firstStudent)
console.log(firstStudent.getStudentCourses());










