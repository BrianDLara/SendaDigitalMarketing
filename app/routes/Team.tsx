import React from 'react';

const Team = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Conoce a Nuestro Equipo
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg">
            Somos un equipo apasionado por el marketing digital y la automatización, 
            comprometidos con ayudar a los negocios a crecer de manera eficiente.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Team Member 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Team member" 
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Pablo Lara</h3>
              <p className="text-blue-400 font-medium">CEO & Fundador</p>
              <p className="text-gray-400 mt-2">
                Especialista en marketing digital y automatización de negocios con más de 10 años de experiencia.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Team member" 
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">[Nombre del Socio]</h3>
              <p className="text-blue-400 font-medium">Co-Fundador y Estratega</p>
              <p className="text-gray-400 mt-2">
                Experto en estrategias digitales para la captación y fidelización de clientes en diversas industrias.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Team;
