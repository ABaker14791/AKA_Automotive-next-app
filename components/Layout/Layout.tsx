import { useState } from "react";

// Components
import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";
import Footer from "../Footer/Footer";

const Layout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
