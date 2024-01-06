import resources from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => resources.user.getMe(),
  });
};
