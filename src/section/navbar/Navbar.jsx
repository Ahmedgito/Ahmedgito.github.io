import { useState } from "react";
import { X } from "lucide-react";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../components/Logo";
import GithubButton from "../../components/GithubButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Portfolio", "Services", "Skills"];

  // Framer variants  
  const navItemVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      className="fixed top-0 left-0 w-full  bg-black backdrop-blur-lg z-50 shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex text-white items-center"
        >
          <Logo className="z-50"
            sentence="M. Ahmed"
            manualMode={false}
            blurAmount={5}
            borderColor="lightblue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navItems.map((item, idx) => (
            <motion.li
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={navItemVariant}
              key={idx}
            >
              <a
                href="#"
                className="relative group px-2 py-1 transition-all duration-300 ease-in-out"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-300 transition-all duration-300 group-hover:w-full group-hover:drop-shadow-[0_0_4px_#22d3ee]"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:block hidden"
        >
           <GithubButton />
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-lg z-40"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="relative group text-white text-2xl px-4 py-2 transition-all duration-300 ease-in-out"
              >
                {item}
                <span className="block h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300 group-hover:drop-shadow-[0_0_6px_#22d3ee]"></span>
              </motion.a>
            ))}

            {/* Contact Button (Mobile) */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:hidden block"
            >
              <a href="https://github.com/Ahmedgito"><GithubButton /></a>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
