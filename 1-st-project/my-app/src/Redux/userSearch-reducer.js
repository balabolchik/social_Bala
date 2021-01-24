const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {
            followed: true,
            name: "Nastya",
            surname: "Nemyrka",
            birthday: "2 January",
            location: { city: "Poltava", country: "Ukraine" },
            avatar:
                "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/104172136_303230194049607_271042418530192518_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=POCC1MBS5WwAX-hlR2r&_nc_ht=scontent.flwo1-1.fna&oh=e3fd966665642cebbbf4830cf9ebe56c&oe=601BC2BD",
            id: "02",
        },
        {
            followed: false,
            name: "Ruslan",
            surname: "Sudomlyak",
            birthday: "6 October",
            location: { city: "Lopatyn", country: "Ukraine" },
            avatar:
                "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/62407680_457643228344986_7513279375719006208_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=7iGbvox45uoAX_MFv6w&_nc_ht=scontent.flwo1-1.fna&oh=4f65453bb2deeca4fb80a626fe9ec811&oe=601AE588",
            id: "03",
        },
        {
            followed: true,
            name: "Vitya",
            surname: "Bordulyak",
            birthday: "17 September",
            location: { city: "Lopatyn", country: "Ukraine" },
            avatar:
                "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/21462795_107300816679875_4319652128532239572_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=U0weYsuzDg8AX96Z5si&_nc_oc=AQk9LzoENwVidL5LRU-XfnWjeTYi7Ft1W5doVrXrzphPl419CZeOj8uGC06rbCSWbtk&_nc_ht=scontent.flwo1-1.fna&oh=08b107e8d98f074e340ad0b783397b3c&oe=601A194E",
            id: "04",
        },
        {
            followed: false,
            name: "Natalia",
            surname: "Sudomlyak",
            birthday: "20 September",
            location: { city: "Lopatyn", country: "Ukraine" },
            avatar:
                "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/18767450_118844922031051_1814599832622707971_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=CaOROYeoCg8AX_Jdz5m&_nc_ht=scontent.flwo1-1.fna&oh=32a06d8289ff4e1b0909db34997afa4d&oe=601B8922",
            id: "05",
        },
    ]
};

const userSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return user.id === action.userId
                        ? { ...user, followed: true }
                        : user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return user.id === action.userId
                        ? { ...user, followed: false }
                        : user;
                }),
            };
        case SET_USERS:
            return {
                ...state, 
                users: [...state.users, ...action.users] 
            };
        default:
            return state;
    }
};

export const followCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users: users });

export default userSearchReducer;
