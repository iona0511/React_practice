import axios from "axios";

const KEY = 'AIzaSyC5vE61DTiIyTL8AQzajPs8VcHLxhtSOZM';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
