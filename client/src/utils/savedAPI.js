import axios from "axios";

export default {

    saveSnippet: function (postData) {
        // console.log("SavedAPI working")
        return axios.post("/api/posts/save", postData)
    },

    getSavedSnippets: function(){
        return axios.get("api/posts/save")
    },

    unSaveSnippet: function(id) {
        return axios.delete("api/posts/save/" + id)
    }

}