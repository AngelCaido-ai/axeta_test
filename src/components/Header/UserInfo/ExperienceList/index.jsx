import {useInput} from "../../../../hooks/useInput";
import {connect} from "react-redux";
import {deleteFromUserExperience, pushToUserExperience} from "../../../../store/user/userActrionCreator";
import classNames from "classnames";
import IconSuccess from "../../../../views/Icons/IconSuccess";
import IconError from "../../../../views/Icons/IconError";

import './experienceList.scss'


const ExperienceList = ({experienceList, deleteFromUserExperience, pushToUserExperience}) => {

  const [value, onInput, isEditing, setIsEditing, isError, clearValue] = useInput({})

  const onKeyDown = (e) => {
    if((e.key === 'Enter' || e.type === 'blur')) {
      if(!isError && value !== ""){
        const newUserExperience = {
          id: Date.now(),
          name: value,
          years: "0"
        }
        pushToUserExperience(newUserExperience)
      }
      setIsEditing(false)
      clearValue()
    }
  }

  return (
    <div className="userBoxInfoExperience">
      {
        experienceList.map((experience) => {
        return (
          <div className="userBoxInfoExperienceItem" key={experience.id}>
            {experience.name}
            <div className="button buttonDelete" onClick={() => deleteFromUserExperience(experience.id)}>&#10006;</div>
          </div>
        )
      })
      }
      { !isEditing ?
        <button className="userBoxInfoExperienceAdd" onClick={() => setIsEditing(true)}>&#10010;</button>
          :
        <div className="inputBox">
          <input
            className={classNames({"error": isError})}
            type="text"
            value={value}
            onChange={onInput}
            onKeyDown={onKeyDown}
            onBlur={onKeyDown}
            autoFocus
          />
          <IconSuccess/>
          {isError && <IconError />}
        </div>
      }
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    experienceList: state.user.experience
  }
}

const mapDispatchToProps = {
  deleteFromUserExperience,
  pushToUserExperience
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ExperienceList);