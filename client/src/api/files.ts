import axios from "@/core/axios";
import { FileItem } from "@/api/types/files.types";

export const getAll = async (userId: string): Promise<FileItem[]> => {
  return (await axios.get(`dashboard/${userId}`)).data;
};
