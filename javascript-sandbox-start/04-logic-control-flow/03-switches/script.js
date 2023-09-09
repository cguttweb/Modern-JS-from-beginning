const date = new Date(2023, 1, 0, 9, 0, 0)
const month = date.getMonth()

switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break; // need to include break after each case
    default:
        console.log('Not Jan, Feb or March')
}