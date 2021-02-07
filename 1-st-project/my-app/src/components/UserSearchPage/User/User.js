import style from "./User.module.css";
import userImage from "./../../../img/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


class User extends React.Component {
    deleteFromFriends = () =>{
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.user.id}`, {
            withCredentials:true,
            headers: {
                "API-KEY": "8cb4dee8-f0f8-47ab-8a0e-2a61fd1566a4"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.deleteFromFriends(this.props.user.id);
            }
        })
    }
    addToFriends = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.user.id}`, {}, {
            withCredentials:true,
            headers: {
                "API-KEY": "8cb4dee8-f0f8-47ab-8a0e-2a61fd1566a4"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.addToFriends(this.props.user.id);
            }
        })
    }
    render() {
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
                            <button className={style.deleteFromFriends} onClick={this.deleteFromFriends}>
                                <span className={style.unrotate}>&#10006;</span> Delete from Friends
                            </button>
                        : 
                            <button onClick={this.addToFriends}>
                                <span className={style.rotate}>&#10006;</span> Add to Friends
                            </button>
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
