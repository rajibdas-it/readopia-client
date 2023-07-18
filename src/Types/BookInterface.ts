export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  shortDesc?: string;
  longDesc?: string;
  imageUrl?: string;
}
