import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../Redux/features/book/bookApi";

export default function BookDetails() {
  const { id } = useParams();
  // console.log(id);
  const { data, isLoading } = useGetSingleBookQuery(id);

  console.log("bookdetails page", data);

  console.log(isLoading);
  return (
    <div>
      {/* book details section  */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05D3hJcNIg8Gy8kEIXLv5PnbXio80PUbJxQ&usqp=CAU"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Book Title: {data?.data?.title}{" "}
            </h1>
            <p className="py-6">Genre: {data?.data?.genre}</p>
            <p className="py-6">Author: {data?.data?.author}</p>
            <p className="py-6">
              Publication Date: {data?.data?.publicationDate}{" "}
            </p>
            <p className="py-6">Descriptions:</p>

            <div className="flex gap-6 mt-5">
              <Link to={`/update-book/${id}`}>
                <button className="btn btn-primary">Update Book</button>
              </Link>
              <button className="btn btn-secondary">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
      {/* book details section  */}
      {/* review section  */}
      {/* review section  */}
    </div>
  );
}
