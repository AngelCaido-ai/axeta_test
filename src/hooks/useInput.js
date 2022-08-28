import {useEffect, useState} from "react";

export const useInput = ({inputString = ""}) => {
  const [value, setValue] = useState(inputString)
  const [isError, setIsError] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (value === "") {
      setIsError(true)
    }
  })

  const clearValue = () => {
    setValue('')
  }

  const onInput = (event) => {
    let inputValue = event.target.value

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?]+/;
    if (format.test(inputValue) || inputValue === '') {
      setIsError(true)
    } else {
      setIsError(false)
    }

    setValue(inputValue)
  }

  return [value, onInput, isEditing, setIsEditing, isError, clearValue]
}