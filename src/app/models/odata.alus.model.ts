import { Alus } from "./alusrekisteri";

export interface OdataAlus {
    '@odata.context': string;
     value: Alus [];

}