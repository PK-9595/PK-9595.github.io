// For Kathleen's game : Simon
const replicaCode = '2871'
const actualCode = '9103'

correctCode.textContent='Correct Code: ' + replicaCode

document.addEventListener('click', function(event){
    if (!event.target.closest('.row .enter')){return}
    let row=event.target.closest('.row')
    let correctCode

    // Select actual value to compare against based on row type
    if (row.id == 'replicaRow'){
        correctCode = replicaCode
    }
    else{
        correctCode = actualCode
    }
    
    // Getting return value and whether the code is correct
    let attemptVal=row.querySelector('.attempt').value;
    displayVal = lockReturn(attemptVal, correctCode) // Return value that should be on display
    let correctOrWrong // Variable to hold the message whether authentication is successful or not
    if (attemptVal==correctCode){
      correctOrWrong = 'Authentication Successful'
    }
    else{
      correctOrWrong = 'Authentication Failed'
    }
    console.log(attemptVal, correctCode); console.log(attemptVal==correctCode)
    let result=row.querySelector('.result')
    result.textContent=displayVal + ' - ' + correctOrWrong
})

function lockReturn(attempt, correctCode){
    attempt = new String(attempt)
    attemptDigits=Array.from(attempt) //split attempt into array of digits
    codeDigits=Array.from(new String(correctCode)) // Split code into array of digits
    
    // Input handling
    if (attemptDigits.length != 4) {
      return "Invalid entry, code needs to be 4 digits"
    }
  
    //Digit 1 value: spaces with wrong digits
    let digit1=0
    for (let i=0; i<4; i++){
      if (attemptDigits[i] != codeDigits[i]){
        digit1++
      }
    }
    digit1=digit1.toString()
  
    //Digit 2 value: spaces with wrong digits, digits do not belong anywhere
    let digit2=0
    for (const i of attemptDigits){
      if (!codeDigits.includes(i)){
        digit2++
      }
    }
    digit2=digit2.toString()
  
    //Digits 3 & 4 value: difference of sum (magnitude)
    let attemptSum = attemptDigits.reduce((acc,curr) => acc + parseInt(curr), 0);
    let codeSum = codeDigits.reduce((acc,curr) => acc + parseInt(curr), 0);
    let digit34 = Math.abs(attemptSum-codeSum)
    digit34=digit34.toString()
    if (digit34.length==1){
      digit34='0'+digit34
    }
  
    returnVal = digit1 + digit2 + digit34
  
    return returnVal
    //return returnVal
  }