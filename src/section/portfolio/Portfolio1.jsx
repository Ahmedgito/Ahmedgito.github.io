import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/images/haseeb.webp";
import img2 from "../../assets/images/Auto.webp";
import img3 from "../../assets/images/Mind.webp";
import img4 from "../../assets/images/Jafferi.webp";
import img5 from "../../assets/images/nizam.webp";
import img6 from "../../assets/images/Teamo.webp";
import img7 from "../../assets/images/webflow.webp";

const projects = [
  
    {
        title: "Auto-History Inspection",
        status: "ReactJs , PHP",
        image: img2,
        codeUrl: "https://github.com/Ahmedgito/Auto-History-Inspection",
        liveUrl: "https://www.autohistoryinspection.com",
    },
    {
        title: "Teamo Boba",
        status: "ReactJS",
        image: img6,
        codeUrl: "https://github.com/Ahmedgito",
        liveUrl: "https://darkgreen-gorilla-128642.hostingersite.com",
    },

    {
        title: "Jafferi Alliance",
        status: "ReactJS , NodeJS",
        image: img4,
        codeUrl: "https://github.com/Ahmedgito/jafferi-web",
        liveUrl: "https://jaferialliance.com",
    },
    {
        title: "MindCraft Innovation",
        status: "ReactJS",
        image: img3,
        codeUrl: "https://github.com/Ahmedgito/mind-craft",
        liveUrl: "https://mindcraftinnovation.com",
    },
    {
        title: "Haseeb",
        status: "ReactJS",
        image: img1,
        codeUrl: "https://github.com/Ahmedgito",
        liveUrl: "https://maroon-turtle-810614.hostingersite.com",
    },
    {
        title: "Innovate Automations",
        status: "Webflow",
        image: img7,
        codeUrl: "#",
        liveUrl: "#",
    },
];

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            className="py-12 border-t border-[#ffffff10] text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-lg text-blue-300 mb-2 shiny-sec">My work</h2>
                <h3 className="text-4xl md:text-5xl font-medium mb-8">Projects</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                                <motion.div
                                    className="rounded-2xl overflow-hidden shadow-lg mb-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 md:h-76 md:object-cover object-fill"
                                    />
                                </motion.div>
                                <div className="flex items-center px-3">
                                    <div className="flex-grow">
                                        <h4 className="text-2xl font-semibold">{project.title}</h4>
                                        <span className="py-1 text-sm text-gray-400">{project.status}</span>
                                    </div>
                                    <div className="flex gap-2 ml-auto">
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            aria-label="GitHub"
                                            className="size-14 flex justify-center items-center text-gray-400 hover:text-white transition duration-300 ease-in-out border border-gray-600 p-3 rounded-xl bg-[#1414149c] hover:bg-gray-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-7"
                                            >
                                                <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            aria-label="Preview"
                                            className="size-14 flex justify-center items-center text-gray-400 hover:text-white transition duration-300 ease-in-out border border-gray-600 p-3 rounded-xl bg-[#1414149c] hover:bg-gray-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-7"
                                            >
                                                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    target="_blank"
                    href="https://github.com/Ahmedgito"
                    aria-label="GitHub"
                    className="w-full flex items-center justify-center gap-2 mt-9 text-gray-400 hover:text-white transition duration-300 ease-in-out border border-gray-600 p-3 rounded-full bg-[#1414149c] hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="md:text-lg text-md">More projects on</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                    </svg>
                </motion.a>
            </div>
        </motion.section>
    );
}
