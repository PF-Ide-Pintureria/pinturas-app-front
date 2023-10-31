import imgAbout2 from '@img/about2.png'
import imgAbout from '@img/about.png'
import React from 'react'
import { LightBulb, Rocket } from '../../components/SVG'

const About = () => {
  const PARRAGRAPH_1 = 'Nuestra historia comenzó como un emprendimiento familiar, impulsado por la visión y pasión de Rodolfo Miguel Guercio. Inicialmente ubicada en la pintoresca localidad de Alta Gracia – Córdoba, pronto nos dimos cuenta de la creciente demanda de pinturas de alta calidad para obras industriales y proyectos particulares en la próspera Villa Anisacate.'
  const PARRAGRAPH_2 = 'Con astucia y determinación, nos trasladamos estratégicamente a Villa Anisacate, donde encontramos nuestro hogar en una localidad en pleno desarrollo y expansión. Desde entonces, hemos trabajado incansablemente para consolidarnos como líderes en la industria, ofreciendo una amplia gama de pinturas FADEPA, accesorios para pintores y herramientas de ferretería de las principales marcas.'
  const PARRAGRAPH_3 = 'En ide Pinturerias, creemos en la excelencia y el servicio personalizado. Nuestro equipo dedicado está aquí para asesorarte en cada paso de tu proyecto, desde grandes obras hasta pequeños proyectos de decoración. Nuestra pasión por la calidad y la satisfacción del cliente nos impulsa a superar las expectativas y a ser tu socio confiable en todas tus necesidades relacionadas con pinturas y ferretería.'

  return (
    <main className="flex flex-col items-center mb-20 p-whiteSpaceTop">
      <img src={imgAbout} alt="Descripción de la imagen" />

      <div className="flex flex-col items-center my-[20px] text-center max-w-[600px]">
        <div>
          <h1 className="text-[24px] font-bold mb-[10px]">¡Bienvenidos a ide Pinturerias!</h1>
        </div>
        <div>
          <p className="text-[16px] mb-4 text-justify">
            {PARRAGRAPH_1}
          </p>
          <p className="mb-4 text-justify">
            {PARRAGRAPH_2}
          </p>
          <p className="mb-4 text-justify">
            {PARRAGRAPH_3}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-14  max-w-[800px]">
          <div className="flex flex-col items-center my-[20px] text-center">
            <Rocket width={'8rem'} />

            <div>
              <p className="text-[20px] font-bold mt-[10px]">Misión</p>
              <p className="text-[14px] max-w-[180px] mb-4 text-justify">
                Ser el líder indiscutible en el rubro de pinturas y ferretería
                en Villa Anisacate y alrededores, brindando productos y
                servicios excepcionales para satisfacer las necesidades de
                nuestros clientes.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center my-[20px] text-center">
            <LightBulb width={'8rem'} />

            <div>
              <p className="text-[20px] font-bold mt-[10px]">Visión</p>
              <p className="text-[14px] max-w-[180px] mb-4 text-justify">
                Convertirnos en la primera opción para proyectos de
                construcción, decoración y mantenimiento en nuestra comunidad,
                destacados por nuestra excelencia en productos y atención
                personalizada..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-7 w-5/6 mb-11 max-w-[800px] p-[20px] my-[20px] border border-[#ccc] rounded-[5px] shadow-sm">
        <div>
          <img src={imgAbout2} alt="img2" className="mr-[20px] h-[100px] w-[100px] rounded-full" />
        </div>

        <div className="grow w-3/5">
          <div className="mb-11 pb-11">
            <div>
              <p className="text-[#007bff] font-bold">Cómo trabajamos en ide Pinturerias</p>
            </div>

            <div>
              <p className="text-[#000] text-[18px] font-bold">Valores:</p>
            </div>

            <div>
              <p className="text-[#888] text-[14px] mb-4 text-justify">
                Unión: Fomentamos un ambiente de trabajo basado en el respeto y
                apoyo mutuo, creando una familia empresarial que se preocupa por
                el bienestar de cada miembro.
              </p>
              <p className="text-[#888] text-[14px] mb-4 text-justify">
                Compromiso: Nos comprometemos a brindar un servicio excepcional
                y a cumplir con las expectativas de nuestros clientes, buscando
                siempre superar sus necesidades y deseos.
              </p>
              <p className="text-[#888] text-[14px] mb-4 text-justify">
                Superación: Buscamos el crecimiento constante y la mejora
                continua en todo lo que hacemos, tanto a nivel individual como
                colectivo, para alcanzar el máximo potencial.
              </p>
              <p className="text-[#888] text-[14px] mb-4 text-justify">
                Desarrollo personal: Valoramos y promovemos el desarrollo
                profesional y personal de nuestro equipo, brindándoles
                oportunidades de crecimiento y capacitación para alcanzar sus
                metas y sueño
                </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

export default About
