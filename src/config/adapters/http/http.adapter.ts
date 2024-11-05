

export abstract class HttpAdapter {

  // abstract get(url: string, options?: any): Promise<any>;
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
  
  // abstract post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  // abstract put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  // abstract delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
}