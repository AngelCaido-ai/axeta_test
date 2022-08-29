export const RegExpValidationString = (inputValue) => {

  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?]+/;

  if (format.test(inputValue) || inputValue === '') {
    return true
  } else {
    return false
  }

}
