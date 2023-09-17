// ForEach - a higher order array method - it will loop through it does not return anything

const teamsArr = ['Liverpool', 'Arsenal', 'Manchester City', 'Chelsea', 'Newcastle United']

// teamsArr.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))

function logTeams(team){
  console.log(team);
}

// teamsArr.forEach(logTeams)

// Objects

const teamsObj = [
  { name: 'Liverpool', location: 'Liverpool' },
  { name: 'Arsenal', location: 'London' },
  { name: 'Newcastle United', location: 'Newcastle' },
  { name: 'Chelsea', location: 'London' },
]

teamsObj.forEach(item => console.log(item.location))