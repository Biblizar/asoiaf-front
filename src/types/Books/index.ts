export interface BookData {
  url: string;
  name: string;
  isbn: string;
  numberOfPages: number;
  authors: Array<string>;
  publiser: string;
  mediaType: string;
  released: Date;
  characters: Array<string>;
  povCharacters: Array<string>;
}
