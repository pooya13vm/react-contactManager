import { Purple, CurrentLine, Foreground, Red } from "../helpers/colors";
const DeleteConfirmModal = ({
  onClose,
  contactFullName,
  contactId,
  removeContact,
}) => {
  const styleHover = (e) => {
    e.target.style.background = Purple;
  };
  return (
    <>
      <div
        style={{
          backgroundColor: CurrentLine,
          border: `1px solid ${Purple}`,
          borderRadius: "1rem",
        }}
        className="p-4"
      >
        <h1 style={{ color: Red }}>Delete contact</h1>
        <p style={{ color: Foreground }}>
          Are you sure to delete {contactFullName}?
        </p>
        <button
          onClick={() => {
            removeContact(contactId);
            onClose();
          }}
          className="btn mx-2"
          style={{ backgroundColor: Purple, color: Foreground }}
        >
          Yes
        </button>
        <button
          onClick={onClose}
          onMouseOver={styleHover}
          className="btn btn-outline-light"
          style={{ color: Foreground }}
        >
          No
        </button>
      </div>
    </>
  );
};
export default DeleteConfirmModal;
