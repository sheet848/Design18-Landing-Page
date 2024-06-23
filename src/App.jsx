import './App.css'
import AboutUs from './components/AboutUs'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import TopCover from './components/TopCover'

function App() {

  return (
    <>
      <NavBar />
      <TopCover />
      <AboutUs />
      <HowItWorks />
      <Pricing />
      <FAQs />
      <Footer />
    </>
  )
}

export default App
