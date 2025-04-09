const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-40  bottom-0 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">MyBrand</div>
          
          {/* Navigation Links */}
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white">Support</a>
          </nav>
          
          {/* Copyright */}
          <p className="mt-4 md:mt-0 text-gray-400">© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;