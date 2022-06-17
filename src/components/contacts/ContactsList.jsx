import Contact from "./contact.jsx";
import Spinner from "../spinner.jsx";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { CurrentLine, Orange, Pink } from "../../helpers/colors";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { loading, filteredContacts } = useContext(ContactContext);

  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end mt-3">
                <Link
                  to={"/contacts/add"}
                  className="btn mx-2"
                  style={{ backgroundColor: Pink }}
                >
                  New contact
                  <i className="fa fa-plus-circle mx-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => <Contact key={c.id} contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CurrentLine }}
              >
                <p className="h3" style={{ color: Orange }}>
                  There is not any contact
                </p>
                <img
                  src={require("../../assets/images/notFound.gif")}
                  className="w-25 rounded"
                  alt="notFound"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default Contacts;
