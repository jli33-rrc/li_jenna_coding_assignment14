export interface CardProps {
  title?: string;
  body?: string;
  src?: string;
  alt?: string;
  button?: string;
  buttonLink?: string;
  backgroundColour?: string;
  fontColour?: string;
}

export interface CardCollectionProps {
  cards: CardProps[];
  backgroundColour?: string;
  fontColour?: string;
}
