const printNewLine = question => {
    console.log(`\n\n------------------ Answer Q${question} ------------------ \n`)
}

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

printNewLine('A')

let test = 'A Random String'
console.log(test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

printNewLine('B')

let sum = 10 + 20
console.log(sum)


/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

printNewLine('C')

let random = Math.floor(Math.random() * 20)
console.log(random)


/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

printNewLine('D')

let me = {
    name: 'Hasan',
    surname: 'Sattar',
    age: 23
}

console.log(me)

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

printNewLine('E')



/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

printNewLine('F')



/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

printNewLine('G')







