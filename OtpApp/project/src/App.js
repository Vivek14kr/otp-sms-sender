import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import { ContactList } from "./components/Contactlist";
import ContentMessage from "./components/ContentMessage.jsx";
import History from "./components/History";
import Home from "./components/Home";
import NewHome from "./components/NewHome";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<NewHome />}></Route>
        <Route path="/contact" element={<ContactList />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/contactinfo" element={<ContactInfo />}></Route>
        <Route path="/contactmessage" element={<ContentMessage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
