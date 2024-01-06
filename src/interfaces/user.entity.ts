import { History } from "./history.entity";

export interface User {
  id:           string;
  name:          string;
  points:        number;
  createDate:    string;
  redeemHistory: History[];
  __v:           number;
}