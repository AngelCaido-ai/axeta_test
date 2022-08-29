import React, { useState} from 'react';
import {userPic} from "../../../../img";

import './avatar.scss'

const Avatar = () => {

  const [avatar, setAvatar] = useState(userPic)
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"]

  const onChange = (e) => {
    if (e.target?.files[0]) {
      if (allowedTypes.some((el) => el === e.target.files?.[0].type)) {
        setAvatar(URL.createObjectURL(e.target.files[0]))
      }
    }
  }

  return (
    <label className="userBoxAvatar">
      <div className="button buttonAvatar">
        <input type="file" onChange={onChange}/>
      </div>
      <img src={avatar} alt="John Smith"/>
    </label>
  );
};

export default Avatar;