export interface Product {
    id: number;
    name: string;
    permalink: string;
    description: string;
    price: string;
    unitValue: number;
    unitToDisplay: string;
    onHand: number;
    taxon: Taxon;
    images: Images;
}

export interface Taxon {
  id: number;
  name: string;
  permalink: string;
}

export interface Images {
  id: number;
  alt: string;
  thumbUrl: string;
  smallUrl: string;
  imageUrl: string;
  largeUrl: string;
}