export interface ShipSignalNumber {
    value: Value[];
}
export interface Value {
    ID: Number;
    MMSINumber: String;
    ShipName: String;
    ShipCallSign: String;
  }
  
  export interface Meriradionumerot {
    '@odata.type': string;
    ID: number;
    MMSINumber: string;
    ShipName: string;
    ShipCallSign: string;
    }