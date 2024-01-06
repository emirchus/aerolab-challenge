import {
  RedeemProductPayload,
  RedeemProductResponse,
} from "@/api/types/redeem";
import { BaseResource } from "../base-resource";

export class RedeemResource extends BaseResource {
  async redeemProduct(
    payload: RedeemProductPayload
  ): Promise<RedeemProductResponse> {
    return this.client.post<RedeemProductResponse>("/redeem", payload);
  }
}
