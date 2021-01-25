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
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(usersId) {
        return instance.get(`profile/${usersId} `)
            .then(response => response.data)
    },
    postFollow(userId){
        instance.post(`follow/${userId}`, {})
            .then(response =>response.data)
    }

};
