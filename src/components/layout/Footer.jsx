import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cosmética Natural. Todos los derechos reservados.
        </p>
        <a href="https://github.com/Patricia-GraciaGutierrez/mini-proyect" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <Link to="/admin" className="text-sm mt-2 inline-block bg-gray-600 px-3 py-1 rounded-md hover:bg-gray-700">
          Admin
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
