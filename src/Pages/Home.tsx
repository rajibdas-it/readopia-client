import BookCard from "../Components/BookCard";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto mb-10 space-y-10">
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
