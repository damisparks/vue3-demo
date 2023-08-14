import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://itunes.apple.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
}

const client: AxiosInstance = axios.create(axiosConfig)

export default {
  // get all albums
  getAllAlbums(term: string) {
    return client.get(`/search?term=${term}&entity=album`)
  },
}
