import { Link } from "react-router-dom";
import { Comment, Green, Purple } from "../../helpers/colors";
import Spinner from "../spinner";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";

const EditContact = () => {
  const {
    setEditingContactInfo,
    groups,
    loading,
    editingContactState,
    editContactHandler,
  } = useContext(ContactContext);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: Green }}
                  >
                    Edit contact
                  </p>
                </div>
              </div>
              <hr style={{ background: Green }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={editContactHandler}>
                    <div className="mb-2">
                      <input
                        name="fullName"
                        type="text"
                        value={editingContactState.fullName}
                        onChange={setEditingContactInfo}
                        className="form-control"
                        placeholder="Name"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photoUrl"
                        type="text"
                        value={editingContactState.photoUrl}
                        onChange={setEditingContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="image url"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="phone"
                        type="text"
                        value={editingContactState.phone}
                        onChange={setEditingContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Mobile phone"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={editingContactState.email}
                        onChange={setEditingContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Email address"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={editingContactState.job}
                        onChange={setEditingContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Job"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={editingContactState.group}
                        onChange={setEditingContactInfo}
                        required={true}
                        className="form-control"
                      >
                        <option value="">Choose group</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: Purple }}
                        value="Edit contact"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: Comment }}
                      >
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-8 text-center">
                  <img src={editingContactState.photoUrl} width="50%" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default EditContact;
