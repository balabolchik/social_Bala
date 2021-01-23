import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.placeholder}>
                <img src='./../../img/backgrounf.jpg' className={style.logoImg} />
            </div>
            <div className={style.my_value}>
                <img src='./../../img/My_Photo.jpg' />
                <div>
                    <h1>Bordulyak Oleg</h1>
                    <p>Date of Birth: 12 august</p>
                    <p>City: Poltava</p>
                </div>
            </div>
        </div>
    );
}

export default (ProfileInfo);