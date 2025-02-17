/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  // Función para agregar un nuevo usuario
  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUsuario]);
  };

  return (
    <UsuarioContext.Provider value={{ usuarios, agregarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
