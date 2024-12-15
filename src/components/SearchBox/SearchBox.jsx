import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      ></input>
    </div>
  );
}; 
