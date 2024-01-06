import type {
  GetProductResponse,
  GetProductsParams,
} from "@/api/types/products";

export const useGetProducts = async ({
  category,
  limit = 5,
  offset = 0,
}: GetProductsParams): Promise<GetProductResponse> => {
  const getUrl = () => {
    if (typeof window === "undefined")
      return process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    return "";
  };

  const res = await fetch(
    `${getUrl()}/route/products?limit=${limit}&offset=${offset}&category=${category}`,
    {
      method: "GET",
    }
  );
  return await res.json();
};
