import style from "./ProfileInfo.module.css";
import myPhoto from "./../../../img/My_Photo.jpg";
import userImage from "./../../../img/user.png";
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    return (
        <div className={style.my_value}>
            <img
                src={ !props.profile ? myPhoto : (!props.profile.photos.large ? userImage : props.profile.photos.large) } 
                alt="#" 
            />
            <div>
                <h1>
                    {!props.profile ? `Bordulyak Oleg` : props.profile.fullName}
                </h1>
                    <Status status={props.status} uppdateUserStatus={props.uppdateUserStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
