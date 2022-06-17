import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllContacts,
  getAllGroups,
  createContact,
  deleteContacts,
  updateContact,
} from "../services/contactservices";
import { confirmAlert } from "react-confirm-alert";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export const ContactContext = createContext({});

export const ContextProvider = (props) => {
  const [allContacts, setAllContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [searchQuery, setSearchQuery] = useState({ text: "" });
  const [viewedContact, setViewedContact] = useState({});
  const [editingContactState, setEditingContactState] = useState({});

  const navigate = useNavigate();

  // getting data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();

        setAllContacts(contactsData);
        setFilteredContacts(contactsData);

        setGroups(groupsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // view single contact handler
  const viewContactHandler = (contactId) => {
    const singleContact = allContacts.filter((item) => item.id === contactId);
    setViewedContact(singleContact[0]);
  };

  // add contact handler
  const setContactInfo = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status, data } = await createContact(contact);
      if (status === 201) {
        const newAllContacts = [...allContacts, data];

        setAllContacts(newAllContacts);
        setFilteredContacts(newAllContacts);

        setContact({});
        setLoading(false);
        navigate("/contacts");
      }
    } catch (error) {}
  };

  // delete contact handler
  const DeleteHandler = (contactId, contactFullName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteConfirmModal
            onClose={onClose}
            contactFullName={contactFullName}
            contactId={contactId}
            removeContact={removeContact}
          />
        );
      },
    });
  };
  const removeContact = async (contactId) => {
    const allContactsCopy = [...allContacts];
    try {
      setLoading(true);
      const updatedContacts = allContacts.filter((c) => c.id !== contactId);

      setAllContacts(updatedContacts);
      setFilteredContacts(updatedContacts);
      setLoading(false);
      const { status } = await deleteContacts(contactId);
      if (status !== 200) {
        setAllContacts(allContactsCopy);
        setFilteredContacts(allContactsCopy);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setAllContacts(allContactsCopy);
      setFilteredContacts(allContactsCopy);
      setLoading(false);
    }
  };

  // edit content handler
  const findEditingContact = (itemId) => {
    const editContact = allContacts.filter((item) => item.id === itemId);
    setEditingContactState(editContact[0]);
  };
  const setEditingContactInfo = (e) => {
    setEditingContactState({
      ...editingContactState,
      [e.target.name]: e.target.value,
    });
  };
  const editContactHandler = async (e) => {
    e.preventDefault();
    const allContactsCopy = [...allContacts];
    const recoverState = [...allContacts];
    try {
      setLoading(true);
      const editContactIndex = allContacts.findIndex(
        (item) => item.id === editingContactState.id
      );
      allContactsCopy.splice(editContactIndex, 1, editingContactState);
      setAllContacts(allContactsCopy);
      setFilteredContacts(allContactsCopy);
      setLoading(false);
      navigate("/contacts");
      const { status } = await updateContact(
        editingContactState,
        editingContactState.id
      );
      if (status !== 200) {
        setAllContacts(recoverState);
        setFilteredContacts(recoverState);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setAllContacts(recoverState);
      setFilteredContacts(recoverState);
      setLoading(false);
    }
  };

  // search handler functions
  const contactSearch = (event) => {
    setSearchQuery({ ...searchQuery, text: event.target.value });
    const contacts = allContacts.filter((contact) => {
      return contact.fullName
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredContacts(contacts);
  };
  return (
    <ContactContext.Provider
      value={{
        loading,
        contact,
        allContacts,
        groups,
        filteredContacts,
        searchQuery,
        setSearchQuery,
        setContactInfo,
        createContactForm,
        DeleteHandler,
        contactSearch,
        viewContactHandler,
        viewedContact,
        editContactHandler,
        editingContactState,
        setEditingContactInfo,
        findEditingContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
