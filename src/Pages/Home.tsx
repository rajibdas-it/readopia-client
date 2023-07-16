import Carousel from "../Components/Carousel";
import { IBook } from "../Types/BookInterface";
import Card from "../Components/Card";
import { useGetAllBooksQuery } from "../Redux/features/book/bookApi";

export default function Home() {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div className="max-w-[1400px] mx-auto mb-10 space-y-10">
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data.map((book: IBook) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
