import style from "./App.module.css";
import Nav from "./components/Navbar/Nav";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import { Route } from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import MusicPage from "./components/MusicPage/MusicPage";
import SettingPage from "./components/SettingPage/SettingPage";
import MessagePage from "./components/MessagePage/MessagePage";
import UserSearchPageContainer from "./components/UserSearchPage/UserSearchPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className={style.App}>
            <HeaderContainer />
            <Nav />
            <div className={style.App_content}>
                <Route path="/profile/:userId?" render={() => <ProfilePageContainer />} />
                <Route path="/dialogs" render={() => <MessagePage />} />
                <Route path="/user_search" render={() => <UserSearchPageContainer />} />
                <Route path="/news" render={() => <NewsPage />} />
                <Route path="/musics" render={() => <MusicPage />} />
                <Route path="/settings" render={() => <SettingPage />} />
            </div>
        </div>
    );
};

export default App;
