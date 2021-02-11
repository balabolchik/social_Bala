import style from "./ProfilePage.module.css";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
    return (
        <div className={style.myPage}>
            <div className={style.profile}>
                <ProfileInfo profile={props.profilePage.profile}/>
            </div>
            <div className={style.profile}>
                <UserPostsContainer />
            </div>
        </div>
    );
};

export default ProfilePage;
