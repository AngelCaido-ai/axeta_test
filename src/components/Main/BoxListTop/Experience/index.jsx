import React from 'react';
import ExperienceItem from "./ExperienceItem";
import {connect} from "react-redux";
import {editUserExperienceYears} from "../../../../store/user/userActrionCreator";

const arr = [
  {id: 1, name: 'PHP', years: 6},
  {id: 2, name: 'Ruby', years: 2},
  {id: 3, name: 'JavaScript', years: 4.5},
]

const Experience = ({experienceList, editUserExperienceYears}) => {

  return (
    <div className="boxListItem">
      <h2 className="titleName">Experience</h2>
      <ul className="listText">
        {
          experienceList.map((item) => {
            return (
              <ExperienceItem
                key={item.id}
                item={item}
                editUserExperienceYears={editUserExperienceYears}
              />
            )
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experienceList: state.user.experience
  }
}

const mapDispatchToProps = {
  editUserExperienceYears
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Experience);