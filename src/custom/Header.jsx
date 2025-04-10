import { Button } from "@/components/ui/button";
import React, { useLayoutEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";


import { gsap } from "gsap";

const Header = () => {
  const { user, isSignedIn } = useUser();


  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const logo =gsap.timeline()
      logo.from('#logo', {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger:0.2,
      }).from(['#link-1' ,'#link-2' ,'#link-3'],{
        y: -20,
        opacity: 0,
        duration: 1,
        stagger:0.2,
      })
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <header ref={comp} className="h-full w-full bg-blue-200/50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 ">
      {/* Logo */}
      <div  className="text-2xl font-bold text-blue-600"><h1 id="logo"><Link to={'/'}>ResuBuild</Link></h1></div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        <div id="link-2">
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Services</NavigationMenuTrigger>
      <NavigationMenuContent className='bg-blue-200 '>
        <NavigationMenuLink className='hover:text-blue-600 cursor-pointer'><Link to={"/resume-builder"} >Resume Builder</Link></NavigationMenuLink>
        <NavigationMenuLink to={"/"} className='hover:text-blue-600 cursor-pointer'>Resume Analyzer</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        </div>
        <a href="#" id="link-3" className="text-gray-700 hover:text-blue-600">About Us</a>
        <Link to={'/history'} id="link-1" className="text-gray-700 hover:text-blue-600">My History</Link>

      </nav>
      {isSignedIn ? (
          <div className="flex flex-row items-center gap-4">
            <Link to={"./dashboard"}>
              <Button className="btn cursor-pointer">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button>get Started</Button>
          </Link>
        )}
      
      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-700 text-2xl cursor-pointer">☰</div>
    </header>
  );
};

export default Header;