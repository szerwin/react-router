import { useContext } from "react";
import { UsuarioContext } from '../context/UsuarioProvider';

export const Home = () => {
  const { usuarios } = useContext(UsuarioContext);

  // Asegurarse de que `usuarios` sea un array antes de llamar a `map`
  if (!Array.isArray(usuarios)) {
    return <p>Error: Los usuarios no son un array válido.</p>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tecnología</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.tecnologia}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
