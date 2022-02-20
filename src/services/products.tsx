import Axios from "axios";
import { IProducts } from "./../types/interfaces";

export const getProducts = async (): Promise<IProducts[]> => {
  const result = await Axios.get("https://fakestoreapi.com/products");
  return result.data;
};

