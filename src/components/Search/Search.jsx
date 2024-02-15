import search from "../../../public/icons/search.svg";

// eslint-disable-next-line react/prop-types
const Search = ({ query, onChangeQuery }) => {
  return (
    <div className="search">
      <label htmlFor="search"></label>
      <input
        value={query}
        type="text"
        name="search"
        placeholder="Поиск"
        onChange={(e) => onChangeQuery(e)}
      />
      <img src={search} alt="search" />
    </div>
  );
};

export default Search;
