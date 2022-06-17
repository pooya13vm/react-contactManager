import { Purple } from "../../helpers/colors";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";

const SearchContact = () => {
  const { contactSearch, searchQuery } = useContext(ContactContext);
  return (
    <div className="input-group mt-2 w-75">
      <input
        dir="ltr"
        type="text"
        className="form-control"
        placeholder="search for contact"
        aria-label="Search"
        onChange={contactSearch}
        value={searchQuery.text}
      />
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: Purple }}
      >
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};
export default SearchContact;
