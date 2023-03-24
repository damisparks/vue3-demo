import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 3000,
}

const apiClient: AxiosInstance = axios.create(axiosConfig)

export default {
  // get all characters
  getAllCharacters(page: any) {
    return apiClient.get(`/character/?page=${page}`)
  },

  // get single character
  getSingleCharacter(id: number) {
    return apiClient.get(`/character/${id}`)
  },
}
