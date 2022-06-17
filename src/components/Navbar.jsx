import { useLocation } from "react-router-dom";
import SearchContact from "./contacts/SearchContact";

import { Purple, Background } from "../helpers/colors";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: Background }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fas fa-id-badge m-2" style={{ color: Purple }}></i>
              <span style={{ color: Purple }}>contacts</span> management
              application
            </div>
          </div>
          {location.pathname === "/contacts" && (
            <div className="col">
              <SearchContact />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
