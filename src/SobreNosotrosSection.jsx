function SobreNosotrosSection() {
  return (
    <section className="py-10 px-4 md:px-8" id="nosotros">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre nosotros</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              className="max-w-full h-auto rounded-sm shadow-md"
              src="/public/nos.webp"
              alt="Sobre nosotros"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-600 sm:text-left text-center">
            Bienvenidos a G&M Design, una empresa líder en el sector de las reformas generales en Argentina y España. Con un compromiso de excelencia y un enfoque centrado en la satisfacción del cliente, hemos estado brindando servicios de alta calidad durante los últimos 5 años, logrando resultados increíbles que han superado las expectativas de nuestros clientes.
            </p>
            <p className="text-gray-600 mt-4 sm:text-left text-center">
            En G&M Design, creemos que cada hogar tiene el potencial de ser transformado en un espacio hermoso, funcional y personalizado. Nuestro equipo de expertos en diseño de interiores y profesionales en construcción trabaja de la mano con nuestros clientes para comprender sus necesidades y deseos únicos, para luego convertirlos en realidad a través de nuestras habilidades y conocimientos.
            </p>
            <p className="text-gray-600 mt-4 sm:text-left text-center">
            Nuestros servicios de reformas integrales y parciales abarcan desde pequeñas renovaciones hasta proyectos de mayor envergadura. Nos enorgullecemos de ofrecer soluciones creativas y adaptadas a cada presupuesto, manteniendo siempre un alto estándar de calidad en todos nuestros trabajos.
            </p>
            <p className="text-gray-600 mt-4 sm:text-left text-center">
           Contáctanos hoy mismo y descubre por qué nuestros resultados son realmente increíbles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotrosSection;