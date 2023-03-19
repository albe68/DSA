function replaceAlphabets(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = (charCode - 65 + n) % 26 + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = (charCode - 97 + n) % 26 + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
  
  let str = "HELLO";
  let n = 2;
  let result = replaceAlphabets(str, n);
  console.log(result);
  