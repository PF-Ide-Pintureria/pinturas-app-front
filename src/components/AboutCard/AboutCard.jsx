// import { Link } from 'react-router-dom'
import React from 'react'

const AboutCard = () => {
  return (
    <section className="w-full p-10 bg-primary  ">
      {/* <Link to="/about"> */}
      <div className="flex flex-col justify-center mt-3 ">
        <h2 className="text-white text-[clamp(1rem,calc(0.75rem+5vw),4rem)] text-center uppercase my-10">
          Sobre Nosotros
        </h2>
        <p className="text-white text-sm md:text-md lg:text-lg mb-3 md:mb-11 text-center">
          En <strong className="relative z-20 after:-z-10 after:absolute after:left-0 after:top-0 after:content-[''] after:bg-orange after:w-full after:h-full">ide Pinturerias</strong>, creemos en la excelencia y el servicio
          personalizado. Nuestro equipo dedicado está aquí para asesorarte
          en cada paso de tu proyecto, desde grandes obras hasta pequeños
          proyectos de decoración. Nuestra pasión por la calidad y la
          satisfacción del cliente nos impulsa a superar las expectativas
          y a ser tu socio confiable en todas tus necesidades relacionadas
          con pinturas y ferretería.
        </p>
      </div>
      {/* </Link> */}
    </section>
  )
}

export default AboutCard
