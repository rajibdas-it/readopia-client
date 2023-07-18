import { useGetAllGenreAndPublicationYearQuery } from "../Redux/features/book/bookApi";
import { useAppDispatch } from "../Redux/app/hook";
import { setGenreValue } from "../Redux/features/filter/filterSlice";

export default function GenreOption() {
  const { data } = useGetAllGenreAndPublicationYearQuery(undefined);
  const dispatch = useAppDispatch();
  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-primary select-sm w-full max-w-xs"
        onChange={(e) => dispatch(setGenreValue(e.target.value))}
      >
        <option disabled selected>
          Genre
        </option>
        {data?.data?.map((gen: any) => (
          <option key={gen._id} value={gen?.genre}>
            {gen?.genre}
          </option>
        ))}
      </select>
    </div>
  );
}
