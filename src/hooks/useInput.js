import {useEffect, useState} from "react";
import {RegExpValidationString} from "../utils/RegExpValidation";

export const useInput = ({inputString = "", type = "string"}) => {
  const [value, setValue] = useState(inputString)
  const [isError, setIsError] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if(type === 'string'){
      RegExpValidationString(value) ? setIsError(true) : setIsError(false)
    } else if(type === 'number'){
      Number(value) > 99 && setValue("99")
    }
  }, [value])

  const clearValue = () => {
    setValue('')
  }

  const onInput = (event) => {
    let inputValue = event.target.value
    if(type === "number") {
      inputValue = inputValue.replace(/^0+/, '')
    }
    setValue(inputValue)
  }

  return [value, onInput, isEditing, setIsEditing, isError, clearValue, setValue]
}