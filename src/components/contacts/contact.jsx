import { CurrentLine, Purple } from "../../helpers/colors";
import ContactBtn from "./contactBtn";

const Contact = ({ contact }) => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CurrentLine }} className="card my-2">
        <div className="card-body">
          <div className="row align-item-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src={contact.photoUrl}
                alt="person img"
                style={{ border: `1px solid ${Purple}` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  Name and Family:{" "}
                  <span className="fw-bold">{contact.fullName}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Phone number: <span className="fw-bold">{contact.phone}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Email: <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <ContactBtn contact={contact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
