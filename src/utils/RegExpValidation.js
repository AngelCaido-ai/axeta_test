export const RegExpValidationString = (inputValue, setIsError) => {

  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?]+/;

  if (format.test(inputValue) || inputValue === '') {
    return true
  } else {
    return false
  }

}
