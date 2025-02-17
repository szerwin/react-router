import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./assets/Navbar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import Login from "./routes/login";
import UsuarioProvider from "./context/UsuarioProvider";

export const RouterDOOM = () => {
  return (
    <UsuarioProvider>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="Home" />} />
      </Routes>
    </UsuarioProvider>
  );
};
