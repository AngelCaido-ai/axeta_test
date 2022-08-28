import React from 'react';
import {useInput} from "../../../../hooks/useInput";

const ExperienceItem = ({item, editUserExperienceYears}) => {

  const {id, name, years} = item;

  const [value, onInput, isEditing, setIsEditing] = useInput({inputString: years})

  const editExperienceYear = (event) => {
    if (event.key === 'Enter' || event.type === 'blur') {
      editUserExperienceYears(id, value)
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
            value={value.replace(/^0+/, '')}
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