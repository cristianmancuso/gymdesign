import Cabeza from "./Cabeza"
import Tittle from "./Tittle"
import Servicios from "./servicios"
import ImageCarousel  from"./ImageCarousel"
import SobreNosotrosSection from "./SobreNosotrosSection"
import ContactoSection from "./ContactoSection"
import Footer from "./Footer"

function App() {
  

  return (
   <div>
    <header>
    <Cabeza />
    </header>
    <main>
    <Tittle />
    <Servicios />
    <ImageCarousel />
    <SobreNosotrosSection />
    <ContactoSection />
    </main>
    <footer>
      <Footer/>
    </footer>
   </div>
  )
}

export default App
