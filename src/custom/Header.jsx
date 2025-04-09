import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-full w-full bg-blue-200/50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 ">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">ResuBuild</div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
      </nav>
      
      {/* Call to Action Button */}
      <Button className="hidden md:block bg-blue-600 hover:bg-blue-900 cursor-pointer text-white px-4 py-2 rounded">Get Started</Button>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-700 text-2xl cursor-pointer">☰</div>
    </header>
  );
};

export default Header;