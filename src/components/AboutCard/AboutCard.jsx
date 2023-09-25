import { Link } from 'react-router-dom'
import React from 'react'

const AboutCard = () => {
  return (
    <div className="cursor-pointer my-10 transition-transform duration-300 ease-in-out hover:scale-105">
      <Link to="/about">
        <div className="mt-15 mb-15">
          <div className="flex w-full justify-center mt-3 ">
            <div className="w-4/5 bg-violet-300 rounded-md ">
              <h1 className="text-primary text-3xl text-center uppercase font-bold cursor-pointer my-10 transition-transform duration-300 ease-in-out hover:scale-125">
                Sobre Nosotros
              </h1>
              <p className="text-secondary text-sm md:text-md lg:text-lg mb-3 md:mb-11 text-center">
                En ide Pinturerias, creemos en la excelencia y el servicio
                personalizado. Nuestro equipo dedicado está aquí para asesorarte
                en cada paso de tu proyecto, desde grandes obras hasta pequeños
                proyectos de decoración. Nuestra pasión por la calidad y la
                satisfacción del cliente nos impulsa a superar las expectativas
                y a ser tu socio confiable en todas tus necesidades relacionadas
                con pinturas y ferretería.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AboutCard
