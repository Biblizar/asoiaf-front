import { axiosClient } from "../apiClient";

export function getAllCharacters(params:string) {
  return axiosClient.get(`/characters${params ? `?${params}`:``}`);
}


export function getCharacterById(id:string) {
  return axiosClient.get(`/characters/${id}`, { params:{id}});
}
