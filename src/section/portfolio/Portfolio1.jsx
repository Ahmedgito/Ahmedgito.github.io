import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../../assets/images/haseeb.webp";
import img2 from "../../assets/images/Auto.webp";
import img3 from "../../assets/images/Mind.webp";
import img4 from "../../assets/images/Jafferi.webp";
import img5 from "../../assets/images/nizam.webp";
import img6 from "../../assets/images/Teamo.webp";
import img7 from "../../assets/images/webflow.webp";

const projects = [
  {
    title: "MoviesForDevs",
    status: "On Development",
    image: img1,
  },
  {
    title: "StockIn",
    status: "On Development",
    image: img2,
  },
  {
    title: "Svgl.app",
    status: "Contributor",
    image: img3,
  },
  {
    title: "Tron Legacy Web",
    status: "Template (not official)",
    image: img4,
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <h2 className="text-sm text-purple-500 mb-2">My work</h2>
      <h1 className="text-4xl font-semibold mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.status}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-[#2a2a2a] rounded-xl hover:bg-purple-600 transition">
                  <FaCode />
                </button>
                <button className="p-2 bg-[#2a2a2a] rounded-xl hover:bg-purple-600 transition">
                  <FaExternalLinkAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
