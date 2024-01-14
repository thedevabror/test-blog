import React from 'react'
import { Main, Navbar, Section } from './components'

const App = () => {
  return (
    <div className='bg-[#111827] transition-all duration-300'>
        <Navbar />
        <Main />
        <Section />
    </div>
  )
}

export default App