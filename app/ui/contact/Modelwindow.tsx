import React from 'react'
import Title from '../works/Title'
import Paragraphs from '../components/Paragraphs'

function Modelwindow() {
  return (
    <div className='flex flex-col gap-5 md:gap-10'>
        <Title text='Thank you for your message!'/>
        <Paragraphs text='I will be in touch shortly' delay={0.5} position={20}/>
        <Paragraphs text='' delay={1} position={-20} span='Have a nice day :)'/>
    </div>
  )
}

export default Modelwindow