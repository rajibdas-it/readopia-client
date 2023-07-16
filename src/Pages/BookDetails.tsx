import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

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
            <h1 className="text-5xl font-bold">Book Title:</h1>
            <p className="py-6">Genre:</p>
            <p className="py-6">Author:</p>
            <p className="py-6">Publication Date: </p>
            <p className="py-6">Descriptions:</p>

            <div className="flex gap-6 mt-5">
              <button className="btn btn-primary">Update Book</button>
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
