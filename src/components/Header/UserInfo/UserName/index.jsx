import {useInput} from "../../../../hooks/useInput";
import {editUserName} from "../../../../store/user/userActrionCreator";
import {connect} from "react-redux";
import classNames from "classnames";
import './userName.scss'

const UserName = ({userName, editUserName}) => {

  const [value, onInput, isEditing, setIsEditing, isError] = useInput({inputString: userName});

  const handleName = (e) => {
    if ((e.key === 'Enter' || e.type === 'blur') && !isError) {
      editUserName(value)
      setIsEditing(false)
    }
  }

  console.log(`UserName ${userName}`)

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
            <div className="button buttonSuccess">&#10004;</div>
            {isError && (
              <>
                <div className="button buttonDelete">&#10006;</div>
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