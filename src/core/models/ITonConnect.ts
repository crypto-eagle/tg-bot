import { CHAIN } from "@tonconnect/protocol";
import { Sender } from "@ton/core";

export interface ITonConnect {
  sender: Sender;
  connected: boolean;
  wallet?: string;
  network?: CHAIN;
}
