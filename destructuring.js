let userArray = process.argv.slice(2);
let [ ,username, email]=userArray
let propertyreqd={ username: '${username}', email: '${email}' }
console.log(propertyreqd);