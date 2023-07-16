import { IBook } from "../Types/BookInterface";
import Card from "../Components/Card";
import { useGetAllBooksQuery } from "../Redux/features/book/bookApi";

export default function Books() {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {data?.data?.map((book: IBook) => (
        <Card key={book?._id} book={book} />
      ))}
    </div>
  );
}
