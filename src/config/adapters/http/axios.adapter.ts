import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface AxiosRequestConfig {
  baseURL: string;
  params: Record<string, string>;
}

export class AxiosAdapter extends HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor( options: AxiosRequestConfig ) {
    super();
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params
    });
  }

  async get<T>(url: string, options?: Record<string, unknown> | undefined ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}