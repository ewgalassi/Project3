import axios from "axios";

export default {

    saveSnippet: function (id) {
        return axios.post("/api/posts/save", { post_id: id })
    },

    getSavedSnippets: function(){
        return axios.get("api/posts/save")
    }

}