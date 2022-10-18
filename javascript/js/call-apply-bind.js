const student = {
  firstName: 'Saisuhas',
  lastName: 'Kothapalli',
}

let printFullName =  function(city, state) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`)
}

printFullName.call(student,'Munich', 'Bavaria');
printFullName.apply(student,['Berlin', 'East Germany'])
let fullName = printFullName.bind(student, 'Wiesbaden','Hesse')
fullName()