function FirstFactorial(num) { 
    let sum = 1;
    while (num > 1) {
       sum *= num;
        num--
    }
    return sum; 
  }