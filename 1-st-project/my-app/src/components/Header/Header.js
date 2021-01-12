import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <img src='./../../img/logo.jpg' />
            <h1>Balabolchik</h1>
        </div>
    );
}

export default (Header);