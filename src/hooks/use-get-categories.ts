import { Category } from "@/interfaces/category.entity";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = async (): Promise<Category[]> => {
  const getUrl = () => {
    if (typeof window === "undefined")
      return process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    return "";
  };

  const res = await fetch(`${getUrl()}/route/categories`, { method: "GET" });
  return await res.json();
};
