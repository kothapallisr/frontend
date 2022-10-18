let students = [{ firstName: "Saisuhas", lastName: "Kothapalli", age: 12}, { firstName: "Sundar", lastName: "Pichai", age: 40}, { firstName: "Mark", lastName: "Zuckerberg", age: 35}, { firstName: "Mate", lastName: "Rimac", age: 19}]

// find the first names of students of age below 20 using map and filter functions

const youngStudents = students.filter( st => {
  return st.age < 20
}).map(st => {
  return st.firstName
})

console.log(youngStudents)

// find the first names of students of age below 20 using reduce function

const yStudents = students.reduce((acc, obj) => {
  if(obj.age < 20) {
    acc.push(obj.firstName)
  }
  return acc;
}, [])

console.log(yStudents)