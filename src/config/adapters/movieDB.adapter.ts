import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e2a4e356364fa29c9b682201e9d3712a',
    language: 'es'
  }
});