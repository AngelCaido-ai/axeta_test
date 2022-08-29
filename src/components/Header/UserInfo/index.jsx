import React from 'react';
import Avatar from "./Avatar";
import ExperienceList from "./ExperienceList";
import Location from "./Location";
import UserName from "./UserName";
import Languages from "./Languages";

import './index.scss'

const UserInfo = () => {

  return (
    <div className="userBox">
      <Avatar/>
      <div className="userBoxInfo">
        <UserName/>
        <Location/>
        <Languages/>
        <ExperienceList/>
      </div>
    </div>
  );
};

export default UserInfo;