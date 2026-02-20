// Inicio.jsx
// Pantalla inicial temporal.
// Aquí luego mostraremos el "Panel" con los módulos.
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <main className="contenedor">
      <h1 className="titulo">PuertoTask</h1>
      <p className="texto">
        Base del proyecto lista. Esta es la página de inicio.
      </p>

      {/* Enlace de prueba para comprobar que el router funciona */}
      <Link className="boton" to="/acceso">
        Ir a Acceso
      </Link>
    </main>
  );
}