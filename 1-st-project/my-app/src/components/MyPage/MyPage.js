import style from "./MyPage.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPage = (props) => {
    return (
        <div className={style.myPage}>
            <div>
                <ProfileInfo />
            </div>
            <div>
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    );
}

export default (MyPage);