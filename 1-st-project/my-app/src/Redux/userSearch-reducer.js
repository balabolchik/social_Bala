import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_SIZE = "SET-TOTAL-USER-SIZE";
const SET_IS_LOADED = "SET-IS-LOADED";
const IS_FOLLOWING_IN_PROGRESS = "IS-FOLLOWIN_IS_PROGRESS";


let initialState = {
    users: [],
    currentPage: 1,
    countSize: 50,
    totalUserSize: 0,
    isLoaded: true,
    isFollowingInProgress: [],
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
        case IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isLoaded
                ? [...state.isFollowingInProgress, action.userId]
                : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const following = userId => ({ type: FOLLOW, userId });
export const unfollowing = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users =>  ( { type: SET_USERS, users });
export const setCurrentPage = currentPage =>  ( { type: SET_CURRENT_PAGE, currentPage });
export const setUserTotalCount = totalUserSize =>  ( { type: SET_TOTAL_USER_SIZE, totalUserSize });
export const setIsLoaded = isLoaded =>  ( { type: SET_IS_LOADED, isLoaded });
export const isFollowedInProgress = (isLoaded, userId) =>  ( { type: IS_FOLLOWING_IN_PROGRESS, isLoaded, userId });

export const getUsers = (currentPage, countSize) => {
    return (dispatch) => {
        dispatch(setIsLoaded(true));
        usersAPI
            .getUsers(currentPage, countSize)
            .then((data) => {
                dispatch(setIsLoaded(false));
                dispatch(setUsers(data.items));
                dispatch(setUserTotalCount(data.totalCount));
            });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(isFollowedInProgress(true, id));
        usersAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(following(id));
            }
            dispatch(isFollowedInProgress(false, id));
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(isFollowedInProgress(true, id));
        usersAPI.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowing(id));
            }
            dispatch(isFollowedInProgress(false, id));
        })
    }
}

export default userSearchReducer;
