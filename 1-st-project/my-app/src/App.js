import style from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { Route } from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import MusicPage from "./components/MusicPage/MusicPage";
import SettingPage from "./components/SettingPage/SettingPage";
import MessagePage from "./components/MessagePage/MessagePage";

const App = (props) => {
    return (
        <div className={style.App}>
            <Header />
            <Nav />
            <div className={style.App_content}>
                <Route path="/profile" render={() => <ProfilePage />} />
                <Route path="/dialogs" render={() => <MessagePage />} />
                <Route path="/news" render={() => <NewsPage />} />
                <Route path="/musics" render={() => <MusicPage />} />
                <Route path="/settings" render={() => <SettingPage />} />
            </div>
        </div>
    );
};

export default App;
