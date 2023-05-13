// For Kathleen's game : Simon

function lockReturn(attempt, code=2871){
    attempt = new String(attempt)
    attemptDigits=Array.from(attempt) //split attempt into array of digits
    codeDigits=Array.from(new String(code)) // Split code into array of digits
    
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
  
  let code=7631
  
  console.log(lockReturn('1234')) // Replica
  console.log(lockReturn('7631',code)) // Actual