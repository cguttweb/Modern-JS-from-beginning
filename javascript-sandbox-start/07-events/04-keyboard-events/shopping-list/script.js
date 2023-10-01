const inputItem = document.querySelector('#item-input')

const onKeyPress = (e) => console.log('keypress')

const onKeyUp = (e) => console.log('keyup')

const onKeyDown = (e) => {
  // console.log('keydown');
  //key
  // if(e.key === 'Enter'){
  //   console.log('Enter pressed')
  // }
  //keyCode
  // if(e.keyCode === 9){
  //   alert('tab pressed')
  // }

  console.log(`Shift: ${e.shiftKey}`);
  console.log(`Control: ${e.ctrlKey}`);
  console.log(`Alt: ${e.sltKey}`); // this is the option key on mac

}

// inputItem.addEventListener('keypress', onKeyPress)
// inputItem.addEventListener('keyup', onKeyUp)
inputItem.addEventListener('keydown', onKeyDown)