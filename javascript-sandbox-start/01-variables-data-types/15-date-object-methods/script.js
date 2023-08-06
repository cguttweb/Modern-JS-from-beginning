let myDate = new Date()

let dateCheck
dateCheck = myDate.getFullYear()
dateCheck = myDate.getDate()
dateCheck = myDate.getDay()
dateCheck = myDate.getMinutes()
dateCheck = myDate.getMilliseconds()

dateCheck = Intl.DateTimeFormat('default').format(myDate)
dateCheck = Intl.DateTimeFormat('en-US').format(myDate)

dateCheck = myDate.toLocaleDateString('default', {
  weekday: 'long',
  month: 'long',
})

dateCheck = myDate.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'UTC',
})

console.log(dateCheck)
