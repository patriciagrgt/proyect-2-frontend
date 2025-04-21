import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-teal-600 text-white p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center">
        <div className="mt-8 mb-6">
          <Link
            to="/about"
            className="hover:text-teal-300 text-lg font-semibold transition-colors duration-200"
          >
            Acerca de
          </Link>
          
          <div className="mt-10">
            <Link
              to="/admin"
              className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 text-sm transition-colors duration-200 inline-block"
            >
              Admin
            </Link>
          </div>
        </div>

        <hr className="border-teal-900 mb-4" />

        <p className="text-sm">&copy; {new Date().getFullYear()} NaturalHub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
