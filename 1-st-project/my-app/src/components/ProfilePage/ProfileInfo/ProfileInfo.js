import style from './ProfileInfo.module.css';
import backroundImg from './../../../img/backgroundImg.jpg'
import backround from './../../../img/background.jpg'
import myPhoto from './../../../img/My_Photo.jpg'
import userImage from './../../../img/user.png'


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.placeholder}>
                <img src={!props.profile?backround:(!props.profile.photos.large?backroundImg:props.profile.photos.large)} className={style.logoImg} alt="#" />
            </div>
            <div className={style.my_value}>
                <img src={!props.profile?myPhoto:(!props.profile.photos.small?userImage:props.profile.photos.small)} alt="#" />
                <div>
                    <h1>{!props.profile?`Bordulyak Oleg`:props.profile.fullName}</h1>
                    <p>Date of Birth: 12 August</p>
                    <p>City: Poltava</p>
                </div>
            </div>
        </div>
    );
}

export default (ProfileInfo);