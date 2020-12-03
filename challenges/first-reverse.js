function FirstReverse(str) { 
    /* 
    1. Get length
    2. for loop through every letter
    3. add first letter to new string with concat
    4. Print result
    */

    var res = "";
    for (let i = 0; i < str.length; i++) {
        let f = str.charAt(i);
        res = f.concat(res);
    }

    console.log(res);  
    return res; 
  };

  FirstReverse("Baklengs");

