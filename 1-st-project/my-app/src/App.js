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
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className={style.app}>
            <HeaderContainer />
            {props.isAuth ? (
                <div className={style.content}>
                    <Nav />
                    <div className={style.app_content}>
                        <Route path="/profile/:userId?" render={() => <ProfilePageContainer />} />
                        <Route path="/dialogs" render={() => <MessagePage />} />
                        <Route path="/user_search" render={() => <UserSearchPageContainer />} />
                        <Route path="/news" render={() => <NewsPage />} />
                        <Route path="/musics" render={() => <MusicPage />} />
                        <Route path="/settings" render={() => <SettingPage />} />
                    </div>
                </div>
            ) : (
                <div>
                    <Route path="/login" render={() => <Login />} />
                </div>
            )}
        </div>
    );
};

export default App;
