const numbers = [2, 4, 6, 8, 10]

const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers);

// using forEach
// const doubleNumbers2 = []

// numbers.forEach(number => doubleNumbers2.push(number * 2))
// console.log(doubleNumbers2);

const companies = [
  { name: 'Company One', category: 'travel', start: 1980, end: 2000 },
  { name: 'Company Two', category: 'retail', start: 1984, end: 2016 },
  { name: 'Company Three', category: 'technology', start: 1990, end: 2018 },
  { name: 'Company Four', category: 'retail', start: 2003, end: 2006 },
  { name: 'Company Five', category: 'technology', start: 1982, end: 2001 },
  { name: 'Company Six', category: 'retail', start: 1978, end: 2008 },
  { name: 'Company Seven', category: 'automobile', start: 1981, end: 1999 },
  { name: 'Company Eight', category: 'finance', start: 1991, end: 2000 },
  { name: 'Company Nine', category: 'finance', start: 1987, end: 2003 },
  { name: 'Company Ten', category: 'retail', start: 1960, end: 2012 },
]

// Array of company names
const companyNames = companies.map(company => company.name)
console.log(companyNames);

// Array with just company and category
const companyCategories = companies.map(company => {
  return {
    name: company.name,
    category: company.category
  }
})

console.log(companyCategories);

// Array of length of each company in years - one with arrays of numbers and one returning objects
const companyYears = companies.map(company => `${company.end - company.start}`)
console.log(companyYears);

const companyYears2 = companies.map(company => {
  return {
    name: company.name,
    yearsActive: company.end - company.start
  }
})

console.log(companyYears2)

// Chain map methods
const squareDouble = numbers
.map(number => Math.sqrt(number))
.map(sqrt => sqrt * 2)

console.log(squareDouble);

// Chain other methods
const evenTriple = numbers
.filter(number => number % 2 === 0)
.map(number => number * 3)

console.log(evenTriple);