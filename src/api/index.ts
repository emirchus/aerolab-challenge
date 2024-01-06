import { AxiosClient } from "./client";
import { ProductsResource, RedeemResource, UserResource } from "./resources";

const apiClient = new AxiosClient(
  "/api",
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
);

const resources = {
  products: new ProductsResource(apiClient),
  user: new UserResource(apiClient),
  redeem: new RedeemResource(apiClient),
};

export default resources;
