import style from "./Content.module.css";
import Nav from "../Navbar/Nav";
import { Route } from "react-router-dom";
import ProfilePageContainer from "../ProfilePage/ProfilePageContainer";
import MessagePage from "../MessagePage/MessagePage";
import UserSearchPageContainer from "../UserSearchPage/UserSearchPageContainer";
import NewsPage from "../NewsPage/NewsPage";
import MusicPage from "../MusicPage/MusicPage";
import SettingPage from "../SettingPage/SettingPage";

const Content = () => {
    return (
        <div className={style.content}>
            <Nav />
            <div className={style.app_content}>
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfilePageContainer />}
                />
                <Route path="/dialogs" render={() => <MessagePage />} />
                <Route
                    path="/user_search"
                    render={() => <UserSearchPageContainer />}
                />
                <Route path="/news" render={() => <NewsPage />} />
                <Route path="/musics" render={() => <MusicPage />} />
                <Route path="/settings" render={() => <SettingPage />} />
            </div>
        </div>
    );
};

export default Content;