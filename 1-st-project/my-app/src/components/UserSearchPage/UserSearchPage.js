import User from "./User/User";
import style from "./UserSearchPage.module.css";

const UserSearchPage = (props) => {

let setUsers = () => {   
    props.setUsers([{
        followed: true,
        name: "Nastya",
        surname: "Nemyrka",
        birthday: "2 January",
        location: { city: "Poltava", country: "Ukraine" },
        avatar:
            "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/104172136_303230194049607_271042418530192518_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=POCC1MBS5WwAX-hlR2r&_nc_ht=scontent.flwo1-1.fna&oh=e3fd966665642cebbbf4830cf9ebe56c&oe=601BC2BD",
        id: "02",
    }]);
}


    return (
        <div className={style.userSearch}>
            <h2>Users</h2>
            {props.users.map((user) => (
                <User key={user.id} followed={user.followed} name={user.name} surname={user.surname} birthday={user.birthday} location={user.location} avatar={user.avatar} id={user.id} addToFriends={props.addToFriends} deleteFromFriends={props.deleteFromFriends} />
            ))}
            <div className={style.button}>
                <button onClick={ setUsers }>Show More</button>
            </div>
        </div>
    );
};

export default UserSearchPage;
