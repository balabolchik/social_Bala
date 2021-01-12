import style from "./MyPage.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = (props) => {
    return (
        <div className={style.myPage}>
            <div>
                <ProfileInfo />
            </div>
            <div>
                <MyPosts profilePage={props.profilePage}/>
            </div>
        </div>
    );
}

export default (MyPage);