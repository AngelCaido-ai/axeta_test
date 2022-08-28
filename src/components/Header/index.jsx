import React from 'react';
import PrintLink from "./PrintLink";
import UserInfo from "./UserInfo";

const Header = ({pageRef}) => {
  return (
      <header>
        <div className="wrapper">
          <PrintLink pageRef={pageRef}/>
          <UserInfo/>
        </div>
      </header>
  );
};

export default Header;
