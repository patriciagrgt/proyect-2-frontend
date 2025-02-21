import planet from "../../assets/planet.png";
import crueltyfree from "../../assets/cruelty-free.png";
import personalcare from "../../assets/personal-care.png";


function About() {
  return (
    <div className="bg-teal-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-800 mb-6 mt-6">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-semibold text-teal-600">NaturalHub</span>, nos dedicamos a ofrecerte una cuidada selección de los mejores productos naturales y ecológicos de marcas comprometidas con el bienestar y la sostenibilidad. Creemos en la importancia de cuidar tu cuerpo y el planeta, por eso elegimos solo productos que respeten ambos.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          En nuestro catálogo encontrarás desde pasta de dientes y crema solar hasta champús, mascarillas, desodorantes y mucho más. Todos los productos que vendemos están elaborados con ingredientes naturales, libres de químicos dañinos y cruelty-free.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-semibold text-teal-600">NaturalHub</span>, no solo te ofrecemos productos, te ofrecemos una forma de vida más consciente y respetuosa con el medio ambiente. Únete a nuestra comunidad y descubre cómo pequeños cambios pueden hacer una gran diferencia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <img
            src={planet}
            alt="Cuidado del Planeta"
            className="w-full h-56 object-cover rounded-lg"
          />
          <img
            src={crueltyfree}
            alt="Cruelty-free"
            className="w-full h-56 object-cover rounded-lg"
          />
          <img
            src={personalcare}
            alt="Cuidado personal sostenible"
            className="w-full h-56 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-teal-800 mt-16 mb-8">Nuestro Compromiso</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li><span className="font-semibold">Calidad:</span> Seleccionamos solo productos de marcas confiables y comprometidas con la calidad.</li>
          <li><span className="font-semibold">Sostenibilidad:</span> Promovemos un estilo de vida respetuoso con el medio ambiente.</li>
          <li><span className="font-semibold">Transparencia:</span> Te informamos sobre los ingredientes y beneficios de cada producto.</li>
          <li><span className="font-semibold">Variedad:</span> Ofrecemos una amplia gama de productos para todas tus necesidades.</li>
        </ul>
        <h2 className="text-2xl font-bold text-teal-800 mt-16 mb-8">Nuestra Misión</h2>
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-semibold text-teal-600">NaturalHub</span>, nuestra misión es facilitarte el acceso a productos naturales y ecológicos de alta calidad, ayudándote a tomar decisiones más conscientes y saludables. Queremos ser tu aliado en el camino hacia un estilo de vida más sostenible.
        </p>
        <p className="text-lg text-gray-700">
          Gracias por elegirnos. Juntos, podemos hacer del mundo un lugar más verde y saludable.
        </p>
      </div>
    </div>
  );
}

export default About;