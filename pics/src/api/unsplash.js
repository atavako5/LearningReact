import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c88410fdd70e5cd62ac3c1a95dcd25504da31717eba6072f7c39b22b9293f773"
  }
});
