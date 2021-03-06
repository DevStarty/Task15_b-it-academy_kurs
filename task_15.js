//   Create a function 'getStudentsOfSex' which should take two arguments:
//   - list of students
//   - sex of students
//   This function should return new array containing only students with given sex.
//   Execute this function for 'male' and 'female' sex and log results to console.
// */
const students = [
  {
    name: "Natalia",
    sex: "female",
  },
  {
    name: "Paulina",
    sex: "female",
  },
  {
    name: "Artem",
    sex: "male",
  },
  {
    name: "Jarek",
    sex: "male",
  },
  {
    name: "Mihai",
    sex: "male",
  },
  {
    name: "Nikoloz",
    sex: "male",
  },
];

const maleStudents = students.filter((student) => student.sex === "male");

console.log("maleStudents: ", maleStudents);

const femaleStudents = students.filter((student) => student.sex === "female");

console.log("femaleStudents: ", femaleStudents);

const maleStudents1 = students.filter(function getStudentsOfSex(student) {
  return student.sex === "male";
});
