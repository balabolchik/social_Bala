import style from "./ProfilePage.module.css";
import UserPostsContainer from "./UserPosts/UserPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
    return (
        <div className={style.myPage}>
            <div>
                <ProfileInfo profile={props.profilePage.profile}/>
            </div>
            <div>
                <UserPostsContainer />
            </div>
        </div>
    );
};

export default ProfilePage;
