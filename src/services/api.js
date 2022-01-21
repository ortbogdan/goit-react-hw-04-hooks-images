import axios from "axios";

const API_KEY = "24332331-fceed411956b076254def86c5";
axios.defaults.baseURL = "https://pixabay.com";

export async function Api(filter, page) {
  const response = await axios.get(
    `/api/?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}
