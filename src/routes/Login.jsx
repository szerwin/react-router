import { useState, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioProvider"; // Asegúrate de que la ruta es correcta

const Login = () => {
  const { agregarUsuario } = useContext(UsuarioContext); // Obtener la función para agregar usuario
  const [formState, setFormState] = useState({
    nombre: "",
    tecnologia: "",
    email: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarUsuario(formState); // Agregar el nuevo usuario
    setFormState({ nombre: "", tecnologia: "", email: "" }); // Limpiar el formulario
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={formState.nombre}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tecnologia" className="form-label">
          Tecnología
        </label>
        <input
          type="text"
          className="form-control"
          name="tecnologia"
          value={formState.tecnologia}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formState.email}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar usuario
      </button>
    </form>
  );
};

export default Login;
