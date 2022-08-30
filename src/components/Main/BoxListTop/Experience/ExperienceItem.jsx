import React from 'react';
import {useInput} from "../../../../hooks/useInput";

import './experienceItem.scss'

const ExperienceItem = ({item, editUserExperienceYears}) => {

  const {id, name, years} = item;

  const [value, onInput, isEditing, setIsEditing, isError, clearValue, setValue] = useInput({inputString: years, type: 'number'})

  const editExperienceYear = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      if(value !== ""){
        editUserExperienceYears(id, value)
      } else {
        setValue(0)
        editUserExperienceYears(id, "0")
      }
      setIsEditing(false)
    }
  }

  return (
    <li>
      <b>{name}</b>

      {!isEditing ?
        <span className="dottedText" onClick={() => setIsEditing(true)}>{value} years</span>
        :
        <div className="inputBox">
          <input
            className="experienceItem"
            type="number"
            value={value}
            onChange={onInput}
            onKeyDown={editExperienceYear}
            onBlur={editExperienceYear}
            autoFocus
            min={1}
            max={99}
          />
        </div>}
    </li>
  );
};

export default ExperienceItem;