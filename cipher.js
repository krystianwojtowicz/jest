function cipher(string) {
  let arr = [];
  function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
  if (containsAnyLetter(string)) {
    string.split("");
    for (let i = 0; i < string.length; i++) {
      let x = string.charCodeAt(i);

      if ((x < 65 || x > 90) && (x < 97 || x > 122)) {
        x = x;
      } else if (x < 122 || x < 90) {
        x = x + 1;
      } else {
        x = x - 1;
      }
      arr.push(String.fromCharCode(x));
    }
    arr = arr.join("");
    return arr;
  }
  return "not a string";
}

module.exports = cipher;
