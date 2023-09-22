import React from 'react'
import Banner from '../../img/workTeam.png'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { teamMembers } from './profiles'

const Developers = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-85vw max-w-15/100 rounded-lg p-4 flex flex-col space-y-4">
        {/* Contenedor Card Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-80 bg-white rounded-lg shadow-xl transition-transform transform hover:translate-y-[-10px]">
              {/* Imagen */}
              <div className="w-60 h-60 mx-auto overflow-hidden mt-2 rounded-full flex justify-center items-center">
                <div
                  className="w-full h-full bg-cover bg-center rounded-full"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg transform transition-transform">
                <h4 className="font-bold text-primary text-lg text-center">
                  {member.name}
                </h4>
                <p className="text-sm text-secondary text-justify">
                  {member.description}
                </p>
                {/* Redes Sociales */}
                <div className="flex justify-center mt-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-black transition-colors duration-300 mx-4 hover:scale-150">
                    <FaGithub style={{ fontSize: '1.5rem' }} />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-black transition-colors duration-300 mx-4 hover:scale-150">
                    <FaEnvelope style={{ fontSize: '1.5rem' }} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-black transition-colors duration-300 mx-4 hover:scale-150">
                    <FaLinkedin style={{ fontSize: '1.5rem' }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="w-85vw max-w-15/100 rounded-lg p-4 flex justify-center items-center">
          <img src={Banner} alt="Banner" className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Developers
