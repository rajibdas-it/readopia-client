import { IBook } from "../Types/BookInterface";

interface IProps {
  book: IBook;
}

export default function Card({ book }: IProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full p-2 cursor-pointer">
      <figure>
        <img src={book?.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body hover:text-white">
        <h2 className="card-title">{book?.title}</h2>
        <p className="">{book.author}</p>

        <div className="flex flex-">
          <p>Genre: {book.genre}</p>
          <p>Publication Date: {book.publicationDate}</p>
        </div>
        <p>{book.shortDesc}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">Add to Wishlist</button>
          <button className="btn btn-secondary">Read Later</button>
        </div>
      </div>
    </div>
  );
}
