import { IBook } from "../Types/BookInterface";
import { BsFillHeartFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function Card({ book }: IProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full p-2 cursor-pointer">
      <figure>
        <img className="" src={book?.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center hover:text-white">
        <h2 className="card-title ">{book?.title}</h2>
        <p className="">{book?.author}</p>
        <p>Genre: {book?.genre}</p>
        <div className="card-actions justify-between gap-10 py-5">
          <button className="btn btn-primary">
            <BsFillHeartFill />
          </button>
          <button className="btn btn-secondary">
            <MdWatchLater />
          </button>
          <Link to={`/book/${book.title}`}>
            <button className="bg-red-500 rounded-md grid w-[50px] h-[50px] place-content-center">
              <HiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
