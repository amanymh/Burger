import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://test-3e15a.firebaseio.com/'
  baseURL: "https://react-burger-app-807b5.firebaseio.com/"
});

export default instance;
