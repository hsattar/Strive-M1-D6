const printNewLine = question => {
    console.log(`\n\n------------------ Answer Q${question} ------------------ \n`)
}

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/

printNewLine(1)

const dice = () => {
    return Math.ceil(Math.random() * 6)
}

console.log(dice())

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

printNewLine(2)

const whoIsBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        console.log('Both Numbers Are The Same')
    }
}

console.log(whoIsBigger(15, 16))

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

printNewLine(3)

const splitMe = string => {
    return string.split(' ')
}

console.log(splitMe('I Love Coding'))

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

printNewLine(4)

const deleteOne = (string, boolean) => {
    return boolean === true ? string.slice(1) : string.substr(0, string.length-1)
}

console.log(deleteOne('hi i am bob', true))

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

printNewLine(5)

const onlyLetters = string => {

    console.log(string)
    let stringArray = string.split('')

    for (let i = 0; i < stringArray.length; i++) {
        switch (stringArray[i]) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':   
            case '5':   
            case '6':
            case '7':
            case '8':
            case '9':
                let numberIndex = i
                stringArray.splice(numberIndex, 1)
                break;
                default:           
        }
    }   

    string = stringArray.join('')
    console.log(string)
}

onlyLetters('I have 4 dogs and 2 cats')

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

printNewLine(6)

const isThisAnEmail = emailAddress => {
    emailAtPosition = emailAddress.search('@')
    emailDotPosition = emailAddress.search('.com')


    if ((emailAtPosition > 0) && (emailDotPosition > 0) && (emailAtPosition < emailDotPosition)) {
        return true
    } else {
        return false
    }
}

console.log(isThisAnEmail('h@hoo.com'))


/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

printNewLine(7)

const whatDayIsIt = () => {
    let today = new Date().getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log(days[today])
}

whatDayIsIt()

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

printNewLine(8)

const rollTheDices = diceRollNo => {
    let rollDiceObject = {
        sum: 0,
        values: []
    }
    for (i = 0; i < diceRollNo; i++) {
        let diceRoll = dice()
        rollDiceObject.sum += diceRoll
        rollDiceObject.values.push(diceRoll)
    }  
    console.log(rollDiceObject)
}

rollTheDices(3) 


/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

printNewLine(9)

const howManyDays = chosenDate => {
    let today = new Date();
    let difference = today - chosenDate;
    let days = 1000 * 60 * 60* 24
    return Math.floor(difference / days)
};

console.log(howManyDays(new Date("2021-09-25")));


/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

printNewLine(10)

const isTodayMyBirthday = (ddmm) => {
    let todayDate = new Date()
    let today = todayDate.getDate().toString()
    let thisMonth = (todayDate.getMonth() + 1).toString()
    let birthday = ddmm.toString()

    if (today < 10) {
        today = today.padStart(2, 0)
    }
    if (thisMonth < 10) {
        thisMonth = thisMonth.padStart(2, 0)
    }

    formattedToday = today + thisMonth
    return formattedToday === birthday ? true : false
}

console.log(isTodayMyBirthday(2709))