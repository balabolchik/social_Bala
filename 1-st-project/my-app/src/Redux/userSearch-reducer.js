const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_SIZE = "SET-TOTAL-USER-SIZE";
const SET_IS_LOADED = "SET-IS-LOADED";


let initialState = {
    users: [],
    currentPage: 1,
    countSize: 10,
    totalUserSize: 0,
    isLoaded: true
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
                users: [...action.users] 
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USER_SIZE:
            return {
                ...state,
                totalUserSize: action.totalUserSize
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        default:
            return state;
    }
};

export const addToFriends = userId => ({ type: FOLLOW, userId });
export const deleteFromFriends = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users =>  ( { type: SET_USERS, users });
export const setCurrentPage = currentPage =>  ( { type: SET_CURRENT_PAGE, currentPage });
export const setUserTotalCount = totalUserSize =>  ( { type: SET_TOTAL_USER_SIZE, totalUserSize });
export const setIsLoaded = isLoaded =>  ( { type: SET_IS_LOADED, isLoaded });


export default userSearchReducer;
