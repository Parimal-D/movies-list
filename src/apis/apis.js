import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;
const searchUrl = process.env.REACT_APP_SEARCH_URL;

export async function getMoviesAPI() {
  const response = await axios.get(baseURL);
  console.log(response);
  return response;
}

export async function getMoviesSearchAPI(searchKey) {
  let searchValue = searchUrl + searchKey;
  const response = await axios.get(searchValue);
  return response;
}
