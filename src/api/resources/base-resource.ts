import { ApiClient } from "@/interfaces/ApiClient";

export class BaseResource {
  constructor(readonly client: ApiClient) {}
}
