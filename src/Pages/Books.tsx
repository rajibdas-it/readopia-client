import { IBook } from "../Types/BookInterface";
import Card from "../Components/Card";
import { useGetAllBooksQuery } from "../Redux/features/book/bookApi";
import GenreOption from "../Components/GenreOption";
import PubYearOption from "../Components/PubYearOption";
import Pagination from "../Components/Pagination";
import { useAppSelector } from "../Redux/app/hook";

export default function Books() {
  const { data } = useGetAllBooksQuery({});

  console.log(useAppSelector((state) => state.filtersData));

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-center lg:justify-end mt-5 gap-5">
        <div>
          <GenreOption />
        </div>
        <div>
          <PubYearOption />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {data?.data?.map((book: IBook) => (
          <Card key={book?._id} book={book} />
        ))}
      </div>
      <div className="my-5 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
}
