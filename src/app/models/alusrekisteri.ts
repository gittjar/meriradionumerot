export interface Alus {
  ID: number;
  alus_id: number;
  nimi: string;
  alustyyppi: number;
  Tilakoodi: string;
  Ensirekisterointipvm: string | null;
  Uusikotimaa: number | null;
  Vanhakotimaa: number | null;
  Rakennusvuosi: string | null;
  Rakennusmaa: number | null;
  Rakennuspaikka: string | null;
  omistajuustyyppi: number;
  asiakkaan_kuntatieto: string | null;
  aluksen_satamapaikka: string | null;
  Kantavuus: number | null;
  JaaluokkaKoodi: string | null;
  Nettovetoisuus: number | null;
  Bruttovetoisuus: number | null;
  Pituus: number | null;
  Suurinpituus: number | null;
  Mallisyvays: number | null;
  Mallikorkeus: number | null;
  Leveys: number | null;
}