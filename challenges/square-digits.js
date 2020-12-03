function squareDigits(number){
    console.log("Input:", number)
      var num = number.toString();
      var fin = "";
      var final = "";
      for (let i = 0; i < num.length; i++){
          let one = num.charAt(i);
          let sq = Math.pow(one, 2);
          let string = sq.toString();
          fin = fin.concat(string);
      }
      final = parseInt(fin);
      return final;
  }