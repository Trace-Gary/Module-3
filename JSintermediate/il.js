// 1) - Intermediate - Lab 1



/* function ucFirstLetters(str) {
    let newString = '';
    let words = str.split(' ')

    for(let word of words) {
        if(newString.length !=0) new string += ' '
        newString += word.charAt(0).toUpperCase() + word.substring(1)
    }

    return newString;
}

console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters("chicago windy city"))
console.log(ucFirstLetters("texas"))                */



// Intermediate - Lab 2     



// 2A)

/* function truncate(str, max) {
    if(str.length > max) {
        return str.substring(0, max) + '...'
    }
    else {
        return str
    }
}


// 2 B)
function truncate2(str, max) {
    return (str.length > max) ? str.substring(0, max) + '...' :str
}

console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate2('This text will be truncated if it is too long', 25))     */



// Intermediate - Lab 3



// 3 A)

/*const animals = ['Tiger', 'Giraffe']
animals.push('Elephant', 'Lion')

console.log(animals)     // ['Tiger', 'Giraffe', 'Elephant', 'Lion']


// 3 B)

animals.unshift('Hippo', 'Koala')

console.log(animals)       // ['Panda', 'Koala', 'Tiger', 'Giraffe']


// 3 C)

animals.sort()

console.log(animals)     // ['Giraffe', 'Koala', 'Panda', 'Tiger'] 


// 3 D)

function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;
    animals[halfway] = newValue
}

replaceMiddleAnimal('Lion')
console.log(animals)


// 3 E)


function findMatchingAnimals(beginswith) {
    return animals.filter(animal =>
        animals.toLowerCase().startsWith(beginsWith.toLowerCase())
    )
}

console.log(findMatchingAnimals('h'))            */



// Intermediate - Lab 4



// 4 ABC)

/* function camelCase(cssProp) {
    let words = cssProp.split('-')
    let camelString = '';

    words.forEach(word => {
        if (camelString.length == 0) {
            camelString = word
        }
        else {
            camelString += word.charAt(0).toUpperCase() + word.substring(1)
        }
    })

    return camelString

}

const camelCase2 = (cssProp) => {
    let camelString = ''

    for (let word of cssProp.split('_')) {
        camelString += (camelString.length ==0) ? word : word.charAt(0).toUpperCase() + word.substring(1)
    }

}

console.log(camelCase('margin-left'))
console.log(camelCase('background-image'))
console.log(camelCase('Display'))       */



// Intermediate - Lab 5



// 5 A)

// - tofixed when adding + concatanates and returns as string and not calculation


// 5 B)

/* let  twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2)
let fixedTen = tenCents.toFixed(2)

console.log(fixedTwenty + fix)      */


// 5 BC)

/* function currencyAddition(float1, float2) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    return(wholeNumber1 + wholeNumber2) /100
}

function currencyOperation(float1, float2, operation) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;

    switch (operation) {
        case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break
        case '*' :
            wholeResult = wholeNumber1 * wholeNumber2; break
        case '-' : 
            wholeResult = wholeNumber1 - wholeNumber2; break
        case '/' : 
            wholeResult = wholeNumber1 / wholeNumber2; break
        default :
            wholeResult = wholeNumber1 + wholeNumber2; break
    }

    return wholeResult /100
}


function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 10** numDecimals 

    let wholeNumber1 = float1 * factor
    let wholeNumber2 = float2 * factor
    let wholeResult = 0


    switch (operation) {
        case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break
        case '*' :
            wholeResult = wholeNumber1 * wholeNumber2; break
        case '-' : 
            wholeResult = wholeNumber1 - wholeNumber2; break
        case '/' : 
            wholeResult = wholeNumber1 / wholeNumber2; break
        default :
            wholeResult = wholeNumber1 + wholeNumber2; break
    }

    return Math.round(wholeResult / factor)
}

console.log(0.3 == currencyAddition(0.1, 0.2))
console.log(0.3 == currencyOperation(0.1, 0.2))

console.log(currencyOperation(0.2, 0.1, '+' , 2))       */


0
// Intermediate - Lab 6



// 6)

/* const colors = ['Red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
    const uniques = [];
    
    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element)
        }
    }
    )
    return uniques
}


console.log(unique(colors))           // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores))       // [ 55, 84, 97, 63, 32, 91, 43 ]     */



// Intermediate - Lab 7



/* const books = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    {id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]


// 7 A)

function getBookTitle(bookId) {
    let matchBook = books.find(book => book.id == bookId)
    return matchBook.title
}

// console.log(getBookTitle(3))


// 7 B)

function getOldBooks() {
    return books.filter(book => book.year < 1950)
}

// console.log(getOldBooks())


// 7 C)

function addGenre() {
    books.map(book => book.genre = 'classic')
}

addGenre()
// console.log(books)


// 7 D)

function getTitles(authorInitial) {
    return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title)
}

// console.log(getTitles('G'))


// 7 E)

function latestBook() {
    let latestYear = 0;
    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year
        }
    })

    return books.find(book => book.year === latestYear)
}

console.log(latestBook())           */



// Intermediate - Lab 8

 

// 8 A)

/* const phoneBookABC = new Map()
phoneBookABC.set('Annablle', '01412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// 8 B)

const phoneBookDEF = new Map ([
    ['Dave', '0123456789'],
    ['Elizabeth', '0123456798'],
    ['Fred', '0123456987']
])

// 8 C)

phoneBookABC.set('Caroline', '0123459876')

// 8 D)

function printPhoneBooks(contacts) {
    contacts.forEach((phone, name) => {
        console.log(`${name}: ${phone}`)
    })
}

printPhoneBooks(phoneBookABC)

// 8 E)

const phoneBooks = new Map([...phoneBookABC, ...phoneBookDEF])
console.log([...phoneBooks.keys()])     */



// Intermediate - Lab 9



/* let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary": 55000,
    "Christiana" : 75000,
    "James" : 43000
}


// 9 A)

function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary
    }
    return total
}


// 9 B)

function topEarner(salaries) {
    let highestSalary = 0;
    let highestEarner = 0;
    for(let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary
            highestEarner = name
        }
    }
    return `${highestEarner} earns the most of everyone`
}

console.log(topEarner(salaries))            */



// Intermediate - Lab 10



// 10 A)

/* const today = new Date()
//console.log(`Current time is ` + today.toLocaleTimeString())

//console.log(today.getHours() + ' hours that have passed so far today')

const today2 = new Date()
//console.log(`${today.getHours() * 60 + today.getMinutes()}`)


// 10 B)

const today3 = new Date ()
//console.log(`${today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds}`)


// 10 C)
const birthday = new Date('1993-01-01');
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {months -=1; days += 30}
if (months < 0) { years -= 1; months += 12}

console.log(`I am ${years} years, ${months} months, and ${days} days old`)      */


// 10 D)

const date1 = new Date("2024-9-16")
const date2 = new Date("2024-11-13")

function daysInBetween(d1, d2) {
    const date1Ms = date1.getTime()
    const date2Ms = date2.getTime()
    const timeDiff = Math.abs(date2 - date1);
    const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

console.log(daysInBetween())






































