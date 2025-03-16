import React from 'react'

//Component Imports
import Mission from "~/Components/Mission"
import Demo from "~/Components/Demo"
import Servicios from "~/routes/Servicios"
import Precios from "~/routes/Precios"


const home = () => {
  return(<div>
    <section className='py-8'>
      <Mission />
    </section>
    <section id='servicios' className='py-10 bg-gray-900'>
      <Servicios />
    </section>
    <section className=' bg-white'>
      <Demo />
    </section>
    <section id='precios'className='py-8 bg-gray-900 text-black'>
      <Precios />
    </section>
  </div>
  )
}

export default home

