import {changeUserAvatar} from "../../../../store/user/userActrionCreator";

import {connect} from "react-redux";

import {userPic} from "../../../../img";
import './avatar.scss'

const Avatar = (props) => {

  const {userAvatar, changeUserAvatar} = props;

  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"]

  const onChange = (e) => {
    if (e.target?.files[0] && allowedTypes.some((el) => el === e.target.files?.[0].type)) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function() {
          const base64Image = reader.result;
          changeUserAvatar(base64Image)
        }
      }
  }

  const avatar = userAvatar ?? userPic

  return (
    <label className="userBoxAvatar">
      <div className="button buttonAvatar">
        <input type="file" onChange={onChange}/>
      </div>
      <img src={avatar} alt="John Smith"/>
    </label>
  );
};


const mapStateToProps = (state) => {
  return {
    userAvatar: state.user.avatar
  }
}

const mapDispatchToProps = {
  changeUserAvatar
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Avatar);