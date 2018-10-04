import axios from "axios";

export default {

  // get all messages
  getMessages: function () {
    return axios.get("/api/message");
  },

  // get unread messages
  getUnread: function () {
    return axios.get("/api/message/unread");
  },

  // post new message
  newMessage: function (msg, to) {
    return axios.post("/api/message", { message: msg, to: to });
  },

  // reply to a message
  reply: function (reply, messageId) {
    return axios.put("/api/message", { reply: reply, message_id: messageId });
  },

  // delete a message
  delete: function (id) {
    return axios.delete("/api/message", { message_id: id });
  }

};
