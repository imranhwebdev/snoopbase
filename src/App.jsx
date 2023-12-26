import { React } from 'react'
import Header from './components/header'
import Banner from './components/banner'
import Services from './components/Services'
import WhatWeDo from './components/WhatWeDo'
import Training from './components/Traniing'
import WhyWe from './components/WhyWe'
import Certificates from './components/Certificates'
import Advisories from './components/Advisories'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <WhatWeDo />
      <Training />
      <WhyWe />
      <Certificates />
      <Advisories />
      <Contact />
      <Footer />
    </>
  )
}

export default App
