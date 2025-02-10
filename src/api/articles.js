import axios from "axios";

axios.defaults.baseURL = "https://64689aefe99f0ba0a8286f54.mockapi.io/";

export const fetchArticles = async () => {
  const { data } = await axios.get("articles", {});
  return data;
};
