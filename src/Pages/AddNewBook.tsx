import { useAddBookMutation } from "../Redux/features/book/bookApi";
import { FormEvent, useState, ChangeEvent } from "react";

export default function AddNewBook() {
  const [addBook, { isLoading, isError, error }] = useAddBookMutation();
  console.log(isError);
  console.log(isLoading);
  console.log(error);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      title,
      author,
      genre,
      publicationDate: publishedDate,
      imageUrl,
      createdBy: "rajibrad@gmail.com",
    };
    addBook(options);
  };
  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form className="w-full shadow-2xl bg-base-100" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="author"
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAuthor(e.target.value)
                }
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                type="text"
                placeholder="genre"
                value={genre}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setGenre(e.target.value)
                }
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Publication Date</span>
              </label>
              <input
                type="text"
                value={publishedDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPublishedDate(e.target.value)
                }
                placeholder="publication date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setImageUrl(e.target.value)
                }
                placeholder="image url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Add Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
