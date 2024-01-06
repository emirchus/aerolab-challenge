import resources from "@/api";
import { type RedeemProductPayload } from "@/api/types/redeem";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRedeemProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["redeem"],
    mutationFn: (payload: RedeemProductPayload) =>
      resources.redeem.redeemProduct(payload),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["me", "products", "history"] });
    },
  });
};
