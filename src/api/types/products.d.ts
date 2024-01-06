import { Product } from "@/interfaces/product.entity";

export type GetProductResponse = Product[];


export type GetProductsParams = {
  category?: string;
  offset?: number;
  limit?: number;
}