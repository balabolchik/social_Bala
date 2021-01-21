import style from './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import MyPage from './components/MyPage/MyPage';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        <div className={style.App}>
            <Header />
            <Nav />
            <div className={style.App_content}>
                <Route path="/profile" render={() => <MyPage store={ props.store } />} />
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/musics" render={() => <Musics />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
}

export default (App);