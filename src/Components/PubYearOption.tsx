import { useGetAllGenreAndPublicationYearQuery } from "../Redux/features/book/bookApi";
import { useAppDispatch } from "../Redux/app/hook";
import { setPublicationYear } from "../Redux/features/filter/filterSlice";

export default function PubYearOption() {
  const { data } = useGetAllGenreAndPublicationYearQuery(undefined);

  const dispatch = useAppDispatch();

  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-primary select-sm w-full max-w-xs"
        onChange={(e) => dispatch(setPublicationYear(e.target.value))}
      >
        <option disabled selected>
          Year
        </option>
        {data?.data?.map((gen: any) => (
          <option key={gen._id} value={gen?.publicationYear}>
            {gen?.publicationYear}
          </option>
        ))}
      </select>
    </div>
  );
}
