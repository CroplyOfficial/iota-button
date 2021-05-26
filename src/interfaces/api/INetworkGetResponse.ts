import { INetwork } from "../db/INetwork";
import { IResponse } from "./IResponse";

export interface INetworkGetResponse extends IResponse {
    /**
     * The list of available networks.
     */
    networks?: INetwork[];
}
