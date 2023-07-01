import { axiosClient } from "../apiClient";

export function getAllCharacters() {
  return axiosClient.get("/characters");
}

export function getCharacterById(id:string) {
  return axiosClient.get(`/characters/${id}`, { params:{id}});
}
