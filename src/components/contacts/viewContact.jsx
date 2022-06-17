import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";
import { Cyan, Purple, CurrentLine } from "../../helpers/colors";

import Spinner from "../spinner";

const ViewContact = () => {
  const { viewedContact, loading, groups } = useContext(ContactContext);
  console.log();

  return (
    <>
      <section className="view-contact-intro p3">
        <div className="container mt-3">
          <div className="row my-2 text-center">
            <p
              className="h3 fw-bold"
              style={{
                backgroundColor: Cyan,
                borderRadius: "1rem",
                color: CurrentLine,
              }}
            >
              Contact information
            </p>
          </div>
        </div>
      </section>
      <hr style={{ backgroundColor: Cyan }} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(viewedContact).length > 0 && (
            <section className="view-contact mt-2">
              <div
                className="container p-2"
                style={{ borderRadius: "1rem", backgroundColor: CurrentLine }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={viewedContact.photoUrl}
                      alt="photo"
                      style={{ border: `1px solid ${Purple}` }}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="list-group">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-dark">
                          Name :{" "}
                          <span className="fw-bold">
                            {viewedContact.fullName}
                          </span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          Phone number :{" "}
                          <span className="fw-bold">{viewedContact.phone}</span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          Email :{" "}
                          <span className="fw-bold">{viewedContact.email}</span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          Job :{" "}
                          <span className="fw-bold">{viewedContact.job}</span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          Group :{" "}
                          <span className="fw-bold">
                            {groups[+viewedContact.group].name}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div
                      className="d-d-grid gap-2 col-6"
                      style={{ textAlign: "left", margin: "10px" }}
                    >
                      <Link
                        to={"/contacts"}
                        className="btn"
                        style={{ backgroundColor: Purple }}
                      >
                        Back to main page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
export default ViewContact;
