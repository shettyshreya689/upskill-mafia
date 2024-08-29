/* ----->>Question 1 :- Given an array of numbers, use the map function with an arrow function to square each element of the array.<<----- */

// const array1 = [9,13,19,8,4,11];
// let newArr = array1.map((curElem,index,arr)=>{
//   return curElem*curElem;
// })j
// console.log(array1);
// console.log(newArr);

/* ----->>Question 2:- Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.<<----- */

// function Grade(score) {
//   return score >= 90 ? 'A' :
//          score >= 80 ? 'B' :
//          score >= 70 ? 'C' :
//          score >= 60 ? 'D' : 'F';
// }
// console.log(Grade(95)); 
// console.log(Grade(85)); 
// console.log(Grade(75)); 
// console.log(Grade(65)); 
// console.log(Grade(55)); =

/* ----->>Question 3:- Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.<<----- */

// const car = {
//   companyName: 'Toyota',
//   model: 'Corolla',
//   year: 2015
// };
// function changeCarYear(carObject, newYear) {
//   carObject.year = newYear;
// }
// changeCarYear(car, 2020);
// console.log(car); 
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); 

/* ----->>Question 4:- Given an array of numbers, use the filter function to create a new array containing only the prime numbers.<<----- */

// const array1 = [9, 13, 19, 8, 4, 11];

// function isPrime(num) {
//   if (num <= 1) return false; 
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true; 
// }

// let primeArr = array1.filter(isPrime);
// console.log("Array of prime numbers:", primeArr);

/*----->> Question 5:- State different use cases of map, filter and reduce functions. <<----- */

// Map Function:- Best for transforming data or creating new arrays by applying a function to each element.
// const num1 = [1, 2, 3, 4];
// const squares = num1.map(num => num * num); 
// console.log("Squares:", squares);
// Filter Function:- Ideal for creating a new array with elements that meet certain criteria
// const num2 = [1, 2, 3, 4, 5];
// const evenNumbers = num2.filter(num => num % 2 === 0); 
// console.log("Even Numbers:", evenNumbers);
// Reduce Function:- Useful for accumulating values or reducing an array to a single value or another structure.
// const num3 = [1, 2, 3, 4];
// const sum = num3.reduce((acc, num) => acc + num, 0);
// console.log("Sum:", sum);

/*----->> Question 6:- Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result. <<----- */


// async function fetchData() {
//   const url = 'https://jsonplaceholder.typicode.com/posts'; 
//   try {
//     const response = await fetch(url); 
//     const data = await response.json();
//     console.log(data); 
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
// fetchData();


/*----->> Question 7:-Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing. <<----- */


const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  contact: {
    phone: "555-1234",
    email: "john.doe@example.com"
  }
};

const phoneNumber = person.contact?.phone;

console.log(phoneNumber); 

const personWithoutContact = {
  name: "Jane Doe",
  address: {
    street: "456 Elm St",
    city: "Othertown",
    zip: "67890"
  }
};
const phoneNumberWithoutContact = personWithoutContact.contact?.phone;
console.log(phoneNumberWithoutContact);
