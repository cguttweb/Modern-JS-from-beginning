let myDate

myDate = new Date()
//month is 0 indexed if adding multiple args
myDate = new Date(2022, 8, 10) // 8 = september not august
myDate = new Date('2022-7-9') // if a string month is correct e.g. 7 = July if year first could be off by a day because of timezones

// Pass in a string
myDate = new Date('2021-07-10T12:30:00')
myDate = new Date('07/10/2021 12:30:00')
myDate = new Date('2022-07-10')
myDate = new Date('7-10-2022') // invalid?

// Timestamps UNIX - number of seconds since 1st January 1970 in JS
myDate = Date.now()

// myDate = new Date('2022-7-10')
myDate = myDate.getTime()

console.log(myDate)
