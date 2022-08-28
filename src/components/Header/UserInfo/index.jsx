import React from 'react';
import {gb} from "../../../img";
import Avatar from "./Avatar";
import ExperienceList from "./ExperienceList";
import Location from "./Location";
import UserName from "./UserName";

import './index.scss'

const UserInfo = () => {

  return (
    <div className="userBox">
      <Avatar/>
      <div className="userBoxInfo">
        <UserName/>
        <Location/>
        <div className="userBoxInfoLanguage">
          <img src={gb} alt="English"/>English
        </div>
        <ExperienceList/>
      </div>
    </div>
  );
};

export default UserInfo;