import { useState } from 'react';

function Cabeza() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú cuando haces clic en un enlace
  };

  return (
    <header>
      <nav className="py-4 px-6 bg-white border-b-2 border-[#BD9F69]">
        <div className="flex items-center justify-between">
          <div className="text-[#cba978] font-bold text-xl">
            <p>G&M Design</p>
          </div>

          <div className="md:hidden">
            <button className="text-[#cba978] focus:outline-none" onClick={handleMenuToggle}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Menú para pantallas más grandes */}
          <div className={`hidden md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="text-[#cba978]  font-bold" onClick={handleLinkClick}>Home</a>
            <a href="#servicios" className="text-[#cba978]  font-bold" onClick={handleLinkClick}>Servicios</a>
            <a href="#nosotros" className="text-[#cba978] font-bold" onClick={handleLinkClick}>Sobre Nosotros</a>
            <a href="#contacto" className="text-[#cba978]  font-bold" onClick={handleLinkClick}>Contacto</a>
          </div>
        </div> 
      </nav>

      {/* Menú para pantallas más pequeñas */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block text-[#cba978] text-center py-1  font-bold" onClick={handleLinkClick}>Home</a>
        <a href="#servicios" className="block text-[#cba978] text-center py-1 font-bold" onClick={handleLinkClick}>Servicios</a>
        <a href="#nosotros" className="block text-[#cba978] text-center py-1  font-bold" onClick={handleLinkClick}>Sobre Nosotros</a>
        <a href="#contacto" className="block text-[#cba978] text-center py-1  font-bold" onClick={handleLinkClick}>Contacto</a>
      </div>
    </header>
  );
}

export default Cabeza;