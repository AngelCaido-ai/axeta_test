import {useEffect, useState} from "react";
import {RegExpValidationString} from "../utils/RegExpValidation";

export const useInput = ({inputString = "", type =  "string"}) => {
  const [value, setValue] = useState(inputString)
  const [isError, setIsError] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
      RegExpValidationString(value) ? setIsError(true) : setIsError(false)
  }, [value])

  const clearValue = () => {
    setValue('')
  }

  const onInput = (event) => {
    let inputValue = event.target.value
    setValue(inputValue)
  }

  return [value, onInput, isEditing, setIsEditing, isError, clearValue, setValue]
}