import React from 'react'
import Banner5 from '@img/pet.png'
import Local from '@img/location.png'
import Map from '@img/map.png'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <div className="w-85vw max-w-15/100 rounded-lg p-4 flex justify-center items-center mt-2">
        <img src={Local} alt="Local" className="rounded-lg" />
      </div>

      <div className="mx-10 mb-5 mt-8 ">
        <div className="flex flex-wrap items-start justify-center lg:items-stretch">
          <a
            href="https://www.google.com/maps/place/Pintureria+Fadepa/@-31.727083,-64.407546,14z/data=!4m6!3m5!1s0x942d54233a91322b:0x171ba1f406068069!8m2!3d-31.7294921!4d-64.4100351!16s%2Fg%2F11h75pz_n7?hl=es-419&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-initial w-full lg:w-1/2 mr-5"
          >
            <img src={Map} alt="Map" className="rounded-lg" />
          </a>
          <div className="flex-initial lg:w-1/2 mb-6 md:mb-0 lg:-ml-12 max-w-200">
            <ContactForm/>
          </div>
        </div>
      </div>

      <div className="w-85vw max-w-15/100 rounded-lg p-6 flex justify-center items-center">
        <img src={Banner5} alt="Banner5" className="rounded-lg mb-9" />
      </div>
    </>
  )
}

export default Contact
