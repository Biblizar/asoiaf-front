import { axiosClient } from "../apiClient";

export function getAllHouses() {
  return axiosClient.get("/houses");
}

export function getHouseById(id: string) {
  return axiosClient.get(`/houses/${id}`, { params: { id } });
}
