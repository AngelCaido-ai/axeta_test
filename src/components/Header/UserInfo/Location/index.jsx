import React, {useEffect} from 'react';
import {connect} from "react-redux";
import classNames from "classnames";

import {useInput} from "../../../../hooks/useInput";
import {connect} from "react-redux";
import {editUserLocation} from "../../../../store/user/userActrionCreator";

import IconError from "../../../../views/Icons/IconError";
import IconSuccess from "../../../../views/Icons/IconSuccess";

import './location.scss'


const Location = ({userLocation, editUserLocation}) => {


  const [value, onInput, isEditing, setIsEditing, isError, clearValue, setValue] = useInput({inputString: userLocation})

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.type === 'blur' && !isError) {
      editUserLocation(value)
      setIsEditing(false)
    }
  }

  useEffect(() => {
    setValue(userLocation)
  }, [userLocation])

  return (
    <div className="userBoxInfoResidency">
      {!isEditing ?
        <div className="userBoxInfoResidencyText" onClick={() => setIsEditing(true)}>
          {userLocation}
        </div>
        :
        <div className="inputBox">
          <input
            className={classNames({"error": isError})}
            value={value}
            onChange={onInput}
            type="text"
            onKeyDown={onKeyDown}
            onBlur={onKeyDown}
            autoFocus
          />
          <IconSuccess/>
          {
            isError && (
              <>
                <IconError/>
                <div className="errorText">Error Description</div>
              </>
            )
          }
        </div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userLocation: state.user.location.name
  }
}

const mapDispatchToProps = {
  editUserLocation
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Location);