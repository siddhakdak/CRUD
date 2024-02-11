import "./App.css";
import Navbar from "./components/Navbar";
import All from "./components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />{" "}
        <Routes>
          <Route  path="/" element={<Create />} />
          <Route  path="/all" element={<All />} />
          <Route  path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
