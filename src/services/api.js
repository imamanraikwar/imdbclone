import axios from "axios";
import { options } from "../constants/constants";

export const getCategoryMovies = async (API) => {
  try {
    const response = await axios.get(API, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getting popular movies data ", error.message);
    return error.response.data;
  }
};
