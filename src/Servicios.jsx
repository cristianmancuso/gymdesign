function Servicios() {
    const serviciosData = [
        {
            title: "Diseño de interiores",
            description: "Es el proceso de planificar y diseñar la distribución, estética y funcionalidad de los espacios interiores del hogar, teniendo en cuenta las preferencias del cliente y la optimización del espacio.",
          },
        {
          title: "Reformas Integrales",
          description: "Este servicio abarca la remodelación completa del hogar, desde la demolición hasta la reconstrucción, renovando todas las áreas y sistemas para mejorar la vivienda en su totalidad.",
     
        },
        {
            title: "Reformas parciales",
            description: "En este caso, se enfocan en mejorar o remodelar solo partes específicas del hogar, como una habitación, el baño, la cocina o el sótano, en lugar de hacer cambios en toda la vivienda.",
        
          },
          {
            title: "Instalaciones eléctricas y de fontanería",
            description: "Actualización o instalación de sistemas eléctricos y de fontanería para garantizar el funcionamiento seguro y eficiente de las redes eléctricas y de agua.",
        
          },
          {
            title: "Albañilería y carpintería",
            description: "Incluye trabajos de construcción como levantar muros, construir tabiques, realizar reformas estructurales, y también trabajos de carpintería como la instalación de puertas, ventanas, muebles, etc.",
         
          },
          {
            title: "Pintura y acabados",
            description: "Pintura y acabados: Servicios de pintura interior y exterior, así como la aplicación de diferentes acabados decorativos para renovar y mejorar la estética del hogar.",
      
          },
          {
            title: "Instalación de sistemas de climatización",
            description: "Se refiere a la instalación de sistemas de calefacción, ventilación y aire acondicionado para mantener un ambiente confortable en el hogar.",
      
          },
          {
            title: "Renovación de fachadas",
            description: "Refrescar o cambiar la apariencia exterior del hogar mediante la reparación de la fachada, el revestimiento y la pintura.",
      
          },
          {
            title: "Decoración y mobiliario",
            description: "Asesoramiento en la elección de mobiliario, textiles y accesorios decorativos para dar el toque final a la remodelación del hogar.",
      
          },
      
       

      ];
  return (
    <section className="py-10 px-4 md:px-8" id="servicios">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="bg-white border border-black flex justify-center items-center flex-col p-10 rounded-sm shadow-md">
            <h3 className="text-lg text-center  text-black font-semibold mb-2">{servicio.title}</h3>
            <p className=" text-center text-black mb-5">{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Servicios