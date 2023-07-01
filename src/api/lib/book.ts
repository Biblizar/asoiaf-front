import { axiosClient } from "../apiClient";

export function getAllBooks() {
  return axiosClient.get("/books");
}

export function getBookById(id: string) {
  return axiosClient.get(`/books/${id}`, { params: { id } });
}
