import style from "./User.module.css"

const User = (props) => {
    let addToFriends = () => {
        props.addToFriends(props.id);
    };

    let deleteFromFriends = () => {
        props.deleteFromFriends(props.id);
    };

return (
        <div className={style.user}>
            <img className={style.avatar} src={props.avatar} alt="#" />
            <div className={style.userInfo}>
                <h2 className={style.fullname}>{`${props.name} ${props.surname}`}</h2>
                <div className={style.userData}>
                    <table>
                        <tr>
                            <td>Date of Birthday:</td><td>{props.birthday}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{props.location.country}</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>{props.location.city}</td>
                        </tr>
                    </table>
                </div>
                <div className={style.buttons}>
                    { props.followed?<button onClick={ deleteFromFriends } >Delete from Friends</button>:<button onClick={ addToFriends } >Add to Friends</button>}
                </div>
            </div>
        </div>
    );
}

export default User;