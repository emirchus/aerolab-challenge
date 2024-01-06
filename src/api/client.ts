import { AEROLAB_TOKEN } from "@/config/constants";
import { ApiClient } from "@/interfaces/ApiClient";
import axios, { type Axios } from "axios";

export class AxiosClient implements ApiClient {
  readonly client: Axios;
  constructor(readonly baseURL: string, readonly baseServerURL: string) {
    const getUrl = () => {
      if (typeof window === "undefined") return baseServerURL;
      return baseURL;
    };

    this.client = axios.create({
      baseURL: getUrl(),
    });

    this.client.interceptors.request.use((c) => {
      c.headers["Authorization"] = `Bearer ${AEROLAB_TOKEN}`;

      return c;
    });
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.client.get<T>(path);

    return response.data;
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const response = await this.client.post<T>(path, body);

    return response.data;
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    const response = await this.client.put<T>(path, body);

    return response.data;
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.client.delete<T>(path);

    return response.data;
  }
}
