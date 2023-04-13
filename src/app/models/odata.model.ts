import { Meriradionumerot } from './shipsignalnumber';

export interface Odata {
  '@odata.context': string;
  value: Meriradionumerot[];
}