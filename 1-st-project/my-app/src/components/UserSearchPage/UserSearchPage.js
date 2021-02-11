import User from "./User/User";
import style from "./UserSearchPage.module.css";
import React from "react";
import Preloader from "../common/preloader/Preloader"

const UserSearchPage = (props) => {
    let pageCount = Math.ceil(props.totalUserSize / props.countSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.userSearch}>
            {props.isLoaded?<Preloader />:null}
            <h2>Users</h2>
            {props.users.map((user) => (
                <User 
                    key={user.id}
                    user={user} 
                    isFollowingInProgress={props.isFollowingInProgress} 
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            ))}
            <div className={style.pages}>
            <div>
                {pages.map( el => (<div key={el} className={style.button}><button onClick={ () => {props.onPageChanged(el)}} className={props.currentPage === el?style.page + " " + style.activePage:style.page}>{el}</button></div>))}
            </div>
            </div>
        </div>
    );
}


export default UserSearchPage;
