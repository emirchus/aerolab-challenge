export interface RedeemProductPayload {
  productId: string;
}

export interface RedeemProductResponse {
  message: string;
  error?: string | undefined;
}
