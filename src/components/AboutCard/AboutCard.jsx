import { Link } from "react-router-dom";
import React from "react";

const AboutCard = () => {
  return (
    <div className="flex w-full justify-center my-14">
      <div className="w-9/12 gap-28">
        <Link
          className="flex columns-1 w-auto h-auto justify-center align-center mt-11"
          to="/about">
          <h1 className="text-primary text-3xl text-center uppercase font-bold cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125">
            Sobre Nosotros
          </h1>
        </Link>

        <p className="text-secondary text-sm mb-11 mt-11 text-center">
          En ide Pinturerias, creemos en la excelencia y el servicio
          personalizado. Nuestro equipo dedicado está aquí para asesorarte en
          cada paso de tu proyecto, desde grandes obras hasta pequeños proyectos
          de decoración. Nuestra pasión por la calidad y la satisfacción del
          cliente nos impulsa a superar las expectativas y a ser tu socio
          confiable en todas tus necesidades relacionadas con pinturas y
          ferretería.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
