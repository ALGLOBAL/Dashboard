import axios from "@/core/axios";
import { Item } from "@/api/types/items.types";

export const getAll = async (userId: string): Promise<Item[]> => {
  return (await axios.get(`dashboard/${userId}`)).data;
};
