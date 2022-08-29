import {useInput} from "../../../../hooks/useInput";
import {editUserName} from "../../../../store/user/userActrionCreator";
import {connect} from "react-redux";
import classNames from "classnames";
import IconError from "../../../../views/Icons/IconError";
import IconSuccess from "../../../../views/Icons/IconSuccess";

import './userName.scss'

const UserName = ({userName, editUserName}) => {

  const [value, onInput, isEditing, setIsEditing, isError, clearValue, setValue] = useInput({inputString: userName});

  const handleName = (e) => {
    if ((e.key === 'Enter' || e.type === 'blur')) {
      if(!isError){
        editUserName(value)
      } else {
        setValue(userName)
      }
      setIsEditing(false)
    }
  }

  return (
    <div className="userBoxInfoName">
      {
        !isEditing ?
          <div className="userBoxInfoNameText" onClick={() => setIsEditing(true)}>
            {userName}
          </div>
          :
          <div className="inputBox">
            <input
              className={classNames({"error": isError})}
              type="text"
              value={value}
              onChange={onInput}
              onKeyDown={handleName}
              onBlur={handleName}
              autoFocus
            />
            <IconSuccess/>
            {isError && (
              <>
                <IconError/>
                <div className="errorText">Error Name</div>
              </>
            )}
          </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.user.name
  }
}

const mapDispatchToProps = {
  editUserName
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(UserName);