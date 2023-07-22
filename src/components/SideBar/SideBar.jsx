import React from "react";

const Sidebar = () => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
  };

  const linkHoverStyle = {
    color: "indigo",
  };

  const links = [
    "Linea Latex",
    "Linea Fondos",
    "Linea Maderas",
    "Linea Esmaltes",
    "Linea Ecologica",
    "Linea Pinturas a la cal",
    "Linea Fijadores - Aditivos",
    "Linea Impermeabilizantes",
    "Linea Productos Auxiliares",
    "Linea Bases Tintometricas",
    "Linea Entonadores y Tintas",
    "Linea Esmaltes Industriales",
    "Linea Productos Especiales",
  ];

  return (
    <aside
      className="w-full p-6 sm:w-80 bg-tertiary text-gray-800"
      style={{ borderRadius: "20px" }}
    >
      <nav className="space-y-12 py-12text-base">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-blue-600">
            Por Categoria
          </h2>
          <div className="text-lg flex flex-col space-y-10">
            {links.map((link, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
