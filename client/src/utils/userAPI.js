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

    editUser: function(update){
        return axios.put('/user/profile', update)
    },

    logoutUser: function(){
        return axios.get('/user/logout')
    }
}