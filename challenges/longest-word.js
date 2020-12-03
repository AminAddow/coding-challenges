function LongestWord(sen) { 
    let i;
    var longest = "";
    for (i = 0; i < sen.split(' ').length; i++) {
        let word = sen.split(' ')
        word = word[i].replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '')

        if (word.length > longest.length){
            longest = word;
        };
    }
        sen = longest;
        return sen; 
  }