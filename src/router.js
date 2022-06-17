import { Route, Routes, Navigate } from "react-router-dom";
import { Contacts, AddContact, EditContact, ViewContact } from "./components";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/add" element={<AddContact />} />
      <Route path="/contacts/view/:contactId" element={<ViewContact />} />
      <Route path="/contacts/edit/:contactId" element={<EditContact />} />
    </Routes>
  );
};
export default AppRouter;
