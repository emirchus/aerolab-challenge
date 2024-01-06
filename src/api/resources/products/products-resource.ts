import { GetProductResponse } from "@/api/types/products";
import { BaseResource } from "../base-resource";

export class ProductsResource extends BaseResource {
  async getProducts(): Promise<GetProductResponse> {
    return this.client.get<GetProductResponse>("/products");
  }
}
