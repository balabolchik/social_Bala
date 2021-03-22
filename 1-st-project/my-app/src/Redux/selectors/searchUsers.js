import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.userSearchPage.users;
}


export const getUsersSelector = createSelector( getUsers, (users) => {
    return users.filter( u => true);
});

export const getCurrentPage = (state) => {
    return state.userSearchPage.currentPage;
}

export const getCountSize = (state) => {
    return state.userSearchPage.countSize;
}

export const getTotalUserSize = (state) => {
    return state.userSearchPage.totalUserSize;
}

export const getIsLoaded = (state) => {
    return state.userSearchPage.isLoaded;
}

export const getIsFollowingInProgress = (state) => {
    return state.userSearchPage.isFollowingInProgress;
}