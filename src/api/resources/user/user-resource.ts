import { GetUserResponse } from "@/api/types/user";
import { BaseResource } from "../base-resource";
import {
  RequestPointsPayload,
  RequestPointsResponse,
} from "@/api/types/points";
import { GetHistoryResponse } from "@/api/types/history";

export class UserResource extends BaseResource {
  async getMe(): Promise<GetUserResponse> {
    return this.client.get<GetUserResponse>("/user/me");
  }

  async requestPoints(
    payload: RequestPointsPayload
  ): Promise<RequestPointsResponse> {
    return this.client.post<RequestPointsResponse>("/user/points", payload);
  }

  async getHistory(): Promise<GetHistoryResponse> {
    return this.client.get<GetHistoryResponse>("/user/history");
  }
}
