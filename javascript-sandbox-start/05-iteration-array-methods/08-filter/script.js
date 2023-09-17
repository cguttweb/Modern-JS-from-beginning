// Filter - does return something unlike forEach in this case it will return an array

const numbers = [1, 2, 5, 24, 29, 31, 43, 56, 68, 78, 90, 102]

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0
// })

// Short version
// const evenNumbers = numbers.filter(number => number % 2 === 0)

// With forEach
// let evenNumbers = []
// numbers.forEach(number => {
  //   if (number % 2 === 0) {
    //     evenNumbers.push(number)
    //   }
    // })
// console.log(evenNumbers);

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

// Get only retail companies
const retailCompanies = companies.filter(company => company.category === 'retail')
// console.log(retailCompanies);

// Companies lasting longer than 10 years
const decadePlusCompanies = companies.filter(company => (company.end - company.start >= 10))
console.log(decadePlusCompanies);