import axios from "axios";
const BASE_URL ='https://dummyjson.com/products';
export const getCategories =  () => {
  return axios.get(`${BASE_URL}/categories`);
};