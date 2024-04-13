import {Sender} from "ton-core";
import {CHAIN} from "@tonconnect/protocol";

export interface ITonConnect {
    sender: Sender;
    connected: boolean;
    wallet?: string;
    network?: CHAIN
}
