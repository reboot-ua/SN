import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4957933a-8a61-407d-a87e-72b4e872954b'
    }

});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId} `)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },


};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(responce => responce.data)

    }
}
