import { axiosInstance } from "../axiosinstance";

export const getAllBooks = () => axiosInstance.get("/getBook");

export const addBook = (data) => axiosInstance.post("/addBook", data);

export const deleteBook = (id) =>
  axiosInstance.delete("/deleteBook", { data: { _id: id } });

export const updateBook = (data) =>
  axiosInstance.put("/updateBook", data);