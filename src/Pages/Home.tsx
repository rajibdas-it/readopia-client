import Carousel from "../Components/Carousel";
import { useState } from "react";
import { IBook } from "../Types/BookInterface";
import Card from "../Components/Card";

export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => setBooks(data));
  return (
    <div className="max-w-[1400px] mx-auto mb-10 space-y-10">
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <Card book={book} />
        ))}
      </div>
    </div>
  );
}
