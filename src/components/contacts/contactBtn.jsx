import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";
import { Orange, Cyan, Red } from "../../helpers/colors";

const ContactBtn = ({ contact }) => {
  const { viewContactHandler, DeleteHandler,findEditingContact } = useContext(ContactContext);
  return (
    <>
      <Link
        to={`view/${contact.id}`}
        className="btn my-1"
        style={{ backgroundColor: Orange }}
        onClick={() => {
          viewContactHandler(contact.id);
        }}
      >
        <i className="fa fa-eye" />
      </Link>
      <Link
        to={`edit/${contact.id}`}
        className="btn my-1"
        style={{ backgroundColor: Cyan }}
        onClick={() => {
          findEditingContact(contact.id)
        }}
      >
        <i className="fa fa-pen" />
      </Link>
      <Link
        to={{ pathname: "/contacts" }}
        className="btn my-1"
        style={{ backgroundColor: Red }}
        onClick={() => {
          DeleteHandler(contact.id, contact.fullName);
        }}
      >
        <i className="fa fa-trash" />
      </Link>
    </>
  );
};

export default ContactBtn;
