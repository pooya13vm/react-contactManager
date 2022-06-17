import { ContextProvider } from "./context/contactContext";
import AppRouter from "./router";
import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </ContextProvider>
  );
};

export default App;
