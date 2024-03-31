function ContactoSection() {
  return (
    <section className="py-10 px-4 md:px-8" id="contacto">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <p className="text-center text-gray-600">
        En G&M Design, el futuro nos emociona, y estamos ansiosos por continuar nuestro camino de éxito en el mundo de las reformas. Si buscas transformar tu hogar en un espacio que refleje tu estilo y cumpla con tus necesidades, ¡estamos aquí para hacerlo realidad! Contáctanos hoy mismo y descubre por qué nuestros resultados son realmente increíbles.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <a
            href="mailto:atencioncliente@gymdesignreformas.com"
            className="bg-white border-2 border-[#cba978] text-[#cba978] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0 md:mr-4"
          >
            Envíanos un correo
          </a>
          <p className="text-gray-600 mt-4 md:mt-0 text-center">Teléfono: +54 9 1164931029 (Argentina) / +34 603022675 (España)</p>
        </div>
       
      </div>
    </section>
  );
}

export default ContactoSection;