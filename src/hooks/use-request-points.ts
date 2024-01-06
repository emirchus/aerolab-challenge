import resources from "@/api";
import { type RequestPointsPayload } from "@/api/types/points";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRequestPoints = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["request-points"],
    mutationFn: (payload: RequestPointsPayload) =>
      resources.user.requestPoints(payload),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["me"] });
    },
  });
};
