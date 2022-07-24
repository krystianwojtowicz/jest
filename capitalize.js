function capitalize(string) {
  function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
  if (containsAnyLetter(string)) {
    const index = /[a-z]/i.exec(string).index;
    console.log(index);
    const newString =
      string.slice(0, index) +
      string.charAt(index).toUpperCase() +
      string.slice(index + 1);
    return newString;
  } else {
    return "no valid characters";
  }
}

module.exports = capitalize;
