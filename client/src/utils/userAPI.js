import axios from "axios"

export default {
    createUser: function(userObject){
        return axios.post("/user/register", userObject)
    },

    loginUser: function(userObject){
        return axios.post("/user/login", userObject)
    },

    getUser: function(){
        return axios.get('/user/')
    },

    getUserById: function(id) {
        return axios.get("/user/" + id)
    },

    editUser: function(update){
        return axios.put('/user/profile', update)
    },

    logoutUser: function(){
        return axios.get('/user/logout')
    },

    followUser: function(id) {
        return axios.post("/user/follow", {user_id: id})
    },

    unfollowUser: function(id) {
        return axios.post("/user/unfollow", {user_id: id})
    }
};
