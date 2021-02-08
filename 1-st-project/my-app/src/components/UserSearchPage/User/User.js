import style from "./User.module.css";
import userImage from "./../../../img/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";
import ButtonFollow from "./ButtonFollow/ButtonFollow";
import ButtonUnfollow from "./BottonUnfollow.js/ButtonUnfollow";
import ButtonDisabled from "./BottonDisabled/ButtonDisabled";


class User extends React.Component {
    deleteFromFriends = () =>{
        usersAPI.unfollow(this.props.user.id, this.props.isFollowedInProgress).then(data => {
            if (data.resultCode === 0) {
                this.props.deleteFromFriends(this.props.user.id);
            }
            this.props.isFollowedInProgress(false, this.props.user.id);
        })
    }

    addToFriends = () => {
        usersAPI.follow(this.props.user.id, this.props.isFollowedInProgress).then(data => {
            if (data.resultCode === 0) {
                this.props.addToFriends(this.props.user.id);
            }
            this.props.isFollowedInProgress(false, this.props.user.id);
        })
    }

    render() {
        let progress = this.props.isFollowingInProgress.some(id => id === this.props.user.id)
        return (
            <div className={style.user}>
                <div className={style.avaAndBut}>
                    <NavLink className={style.nav} to={`/profile/${this.props.user.id}`} >
                        <img 
                            className={style.avatar} 
                            src={ this.props.user.photos.small != null ? this.props.user.photos.small : userImage } 
                            alt="#" 
                        />
                    </NavLink>
                        {this.props.user.followed ? 
                            (progress?<ButtonDisabled progress={progress} />:<ButtonUnfollow deleteFromFriends={this.deleteFromFriends} />)
                        : 
                            (progress?<ButtonDisabled progress={progress} />:<ButtonFollow addToFriends={this.addToFriends}/>)
                        }
                </div>
                <NavLink to={`/profile/${this.props.user.id}`} className={style.userInfo}>
                    <div className={style.one}>
                    <h2 className={style.fullname}>{`${this.props.user.name}`/*${`props.surname`}*/}</h2>
                    <div className={style.userData}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Date of Birthday:</td>
                                    <td>{/*{`props.birthday`}*/}</td>
                                </tr>
                                <tr>
                                    <td>Country:</td>
                                    <td>{/*{`props.location.country`}*/}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>{/*{`props.location.city`}*/}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default User;
