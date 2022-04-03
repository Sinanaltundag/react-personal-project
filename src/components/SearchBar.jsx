import { useCallback } from "react";
const SearchBar = (props) => {

// let [search,setSearch]= useState("")

// console.log(search)
const handleFormSubmit=(e)=>{
e.preventDefault();
}
const onClickEvent = useCallback(
  (e) => {
    console.log(e.target);
    
  },
  [],
)

  return (
    <div>
    
    {/* {setSearch()} */}
      <form className="d-flex justify-content-center" onSubmit={handleFormSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="search" className="col-form-label">
              Search
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="search"
              className="form-control"
              aria-describedby="text"
              placeholder="Enter person name.."
              onChange={props.search}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" type="submit" onClick={onClickEvent.bind(this)}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
