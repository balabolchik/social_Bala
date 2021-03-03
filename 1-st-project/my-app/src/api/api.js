import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8cb4dee8-f0f8-47ab-8a0e-2a61fd1566a4",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, countSize = 20) {
        return instance.get(`users?page=${currentPage}&count=${countSize}`).then((response) => {return response.data});
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {return response.data})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {return response.data})
    },
    auth() {
        return instance.get(`auth/me`).then((response) => { return response.data});
    },
}

export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/${userId}`).then((response) => { return response.data });
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then((response) => {return response.data})
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status }).then((response) => {return response.data})
    },
}

