// 1. What are the results of these expressions? (answer first, then use console.log() to check)
 /*
"" + 1 + 0          // 10 // ask luis tomorrow in class why this isn't "10"
console.log( "" + 1 + 0 );

"" - 1 + 0          // =1
console.log("" - 1 + 0 );

true + false        // 1
console.log(true + false);

!true               // false
console.log(!true);

6 / "3"             // 2
console.log( 6 / "3");

"2" * "3"           // 6
console.log( "2" * "3");

4 + 5 + "px"        // "45px"
console.log( 4 + 5 + "px");

"$" + 4 + 5         // "$45"
console.log( "$" + 4 + 5);

"4" - 2             // 2
console.log( "4" - 2 );

"4px" - 2           // NaN
console.log( "4px" - 2 );

" -9 " + 5          // 95
console.log( "-9" + 5 );

" -9 " - 5          // -14
console.log( "-9" - 5 );

null + 1            // 1
console.log( null + 1 );

undefined + 1       // NaN
console.log( undefined + 1 );

undefined == null   // true
console.log( undefined == null );

undefined === null  // false
console.log( undefined === null );

" \t \n" - 2        // NaN
console.log( "/y/n" - 2);



// 2. Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?
let three = "3"
let four = "4"
let thirty = "30"

// what is the value of the following expressions?
let addition = three + four         // "34"
let multiplication = three * four   // 12
let division = three / four         // 0.75
let subtraction = three - four      // -1
let lessThan1 = three < four        // true
let lessThan2 = thirty < four       // false



// 3. Which of the following console.log messages will print? Why? 
if (0) console.log('#1 zero is true')       // false - will not print because 0 is a false value  
if ("0") console.log('#2 zero is true')     // true  - a non-empty string, including the "0" is considered truthy
if (null) console.log('null is true')       // false - is a falsy value. It represents the abscence of any object value
if (-1) console.log('negative is true')     // true  - any non-zero number, including negative numbers are considered truthy
if (1) console.log('positive is true')      // true  - any non-zero number, is considered a truthy value

*/

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?
// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// result += (a + b < 10) ? 'less than 10' : 'greater than 10';
// console.log(result);   // will print true because 2 + 3 is less than 10

// let a = 25, b =10;
// console.log( a + b <10 ? 'a + b <10 is true' : 'a + b <10 is false' )   // will print false because 25 + 10 = 35 therefore it is not less than 10

// += is an assignment operator that performs addition and assigment in a single Step. It adds the value on the right hand side to the value of the variable on the left hand side, and then assigns the result back to the variable on the left hand side
// Example: let x = 5
// x += 3; - equivalent to x = x + 3
// console.log(x); - output: 8

/* let a = 2, b = 3;                                        start here, also with problem above
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';                                   wasn't quite sure on this one. pay attention tomorrow and ask questions
} else {
result += 'greater than 10';                                   correct answer next line
}

console.log(`${a} + ${b} ? ${ is += 'less than 10' }`)       end here */      



// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.
/* const getGreeting = function(name) {        // A) Function expression syntax
    return 'hello ' + name + '!';
};  */

/* const getGreeting = (name) => 'Hello ' + name + '!';
console.log(getGreeting('Trace'));  */

// 6. A) a) Complete the inigo object by adding a lastName property and including it in the greeting.
/* const inigo = {
    firstName: 'Inigo',
    lastName: 'Juarez',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
}       */

// 6. B) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
/* const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      if (person.numFingers === 6) {
        return "You killed my father. Prepare to die.";
      }
      return 'Nice to meet you.';
    }
}       */

// 6. C) c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
/* const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
      (person.numFingers === 6) 
        ? "You killed my father. Prepare to die." 
        : 'Nice to meet you.'
}        */

/* const westley = {
    name: 'Westley',
    numFingers: 5
}
          
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
          
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',  // Added lastName property
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
        (person.numFingers === 6) 
            ? "You killed my father. Prepare to die." 
            : 'Nice to meet you.'
}
          
// Testing
inigo.greeting(westley); // Output: "Hello Westley, my name is Inigo Montoya. Nice to meet you."
inigo.greeting(rugen);   // Output: "Hello Count Rugen, my name is Inigo Montoya. You killed my father. Prepare to die."
                  */
/* 7. The following object represents a basketball game and keeps track of the score as the
game progresses.

7. A) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
 */
