import { Link } from "react-router-dom";
import { useContext } from "react";
import Spinner from "../spinner";
import { ContactContext } from "../../context/contactContext";
import { Comment, Green, Purple } from "../../helpers/colors";

const AddContact = () => {
  const { loading, contact, setContactInfo, groups, createContactForm } =
    useContext(ContactContext);
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
                    Create new contact
                  </p>
                </div>
              </div>
              <hr style={{ background: Green }} />
              <div className="row mt-5">
                <div className="col-md-6">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        name="fullName"
                        type="text"
                        value={contact.fullName}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder="Name"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photoUrl"
                        type="text"
                        value={contact.photoUrl}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="image url"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="phone"
                        type="text"
                        value={contact.phone}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Mobile phone"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Email address"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={contact.job}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="Job"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={setContactInfo}
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
                        value="Create contact"
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
                <div className="col-md-6 float-end mt-3">
                  <img
                    src="https://presale.firepin.io/assets/branding/firepin/auth-gfx.png"
                    width={350}
                    alt="write"
                    className="rounded img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default AddContact;
