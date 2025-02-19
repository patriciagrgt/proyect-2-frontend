import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-between mb-10 mt-8">
          <Link to="/about" className="hover:text-green-300">
            Acerca de
          </Link>

          <Link to="/admin" className="text-green-800 hover:text-green-300">
            Admin
          </Link>
        </div>

        <hr className="mb-4"/>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cosmética Natural. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
