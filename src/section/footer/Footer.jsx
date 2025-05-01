import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-700 px-6 py-10 mt-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
      >
        {/* Brand Info */}
        <motion.div variants={fadeInUp} custom={1}>
          <h2 className="text-white text-xl font-semibold">M. Ahmed</h2>
          <p className="mt-2 text-sm">
            Full Stack Developer | Building modern, performant, and scalable web applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} custom={2}>
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400 transition-all">Home</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a></li>
          </ul>
        </motion.div>

        {/* Social + Contact */}
        <motion.div variants={fadeInUp} custom={3}>
          <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {[{
              href: "https://github.com/Ahmedgito",
              icon: <FaGithub />,
            }, {
              href: "https://www.linkedin.com/in/m-ahmedd390/",
              icon: <FaLinkedin />,
            }, {
              href: "mailto:your.email@example.com",
              icon: <FaEnvelope />,
            }].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xl"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-xs text-gray-600 mt-10 border-t border-gray-700 pt-6"
      >
        © {new Date().getFullYear()} M. Ahmed. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
