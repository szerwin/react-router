import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./assets/Navbar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";

export const RouterDOOM = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<Navigate to='/home'/>}></Route>
      </Routes>
    </>
  );
};
