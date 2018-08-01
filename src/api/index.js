import axios from "axios";

axios.defaults.baseURL = `${process.env.VUE_APP_API_ENDPOINT}/api`;

export default {
  signUp: {
    createData(params) {
      return axios.post("sign_up", params);
    }
  },
  signIn: {
    createData(params) {
      return axios.post("sign_in", params);
    }
  },
  users: {
    getData() {
      return axios.get("users");
    }
  }
};
