import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import MyPage from './components/MyPage/MyPage';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <div className="App_content">
                <Route path="/profile" render={() => <MyPage profilePage={props.state.profilePage} />} />
                <Route path="/dialogs" render={() => <Dialogs messagesPage={props.state.messagesPage} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/musics" render={() => <Musics />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
}

export default (App);