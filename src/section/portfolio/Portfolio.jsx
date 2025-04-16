import React, { useState } from "react";
import ScrollReveal from '../../components/Scroll';
import TiltedCard from "../../components/Cards";
import img1 from "../../assets/images/haseeb.webp";
import img2 from "../../assets/images/Auto.webp";
import img3 from "../../assets/images/Mind.webp";
import img4 from "../../assets/images/Jafferi.webp";
import img5 from "../../assets/images/nizam.webp";
import img6 from "../../assets/images/Teamo.webp";
import img7 from "../../assets/images/webflow.webp";
import { motion, AnimatePresence } from "framer-motion";
import See from "../../components/See";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { imageSrc: img1, altText: "Portfolio Project", captionText: "Haseeb Abro - Portfolio Project" },
    { imageSrc: img7, altText: "Webflow Project", captionText: "Webflow - Innovate Automations" },
    { imageSrc: img2, altText: "Auto History Inspection", captionText: "PHP - Auto History Inspection" },
    { imageSrc: img6, altText: "ReactJS", captionText: "ReactJS - Teamo" },
    { imageSrc: img3, altText: "MindCraft Innovation", captionText: "ReactJS - MindCraft Innovation" },
    { imageSrc: img4, altText: "Jafferi", captionText: "ReactJS - Jafferi" },
    { imageSrc: img5, altText: "Nizam", captionText: "ReactJS - Nizam" },
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="md:-mt-10 -mt-32">
      <ScrollReveal
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Portfolio
      </ScrollReveal>

      {/* Desktop View */}
      <div className="px-25 py-4 md:block hidden">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-0"
        >
          <AnimatePresence initial={false}>
            {visibleCards.map((card, index) => (
              <motion.div
                key={card.altText}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <TiltedCard
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  captionText={card.captionText}
                  containerHeight="300px"
                  containerWidth="450px"
                  imageHeight="300px"
                  imageWidth="450px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={true}
                  showTooltip={true}
                  displayOverlayContent={false}
                  overlayContent={
                    <p className="mt-0 ms-0 tilted-card-demo-text">
                      {card.captionText}
                    </p>
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="text-center mt-8">
         
            <See
              clr="#7808d0"
              className="-ms-5 mb-8 mt-5"
              onClick={() => setShowAll(prev => !prev)}
            >
              {showAll ? "See Less" : "See More"}
            </See>
          
        </div>
      </div>

      {/* Mobile View */}
      <div className="p-4 md:hidden -mt-10 block">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-0"
        >
          <AnimatePresence initial={false}>
            {visibleCards.map((card, index) => (
              <motion.div
                key={card.altText}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <TiltedCard
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  captionText={card.captionText}
                  containerHeight="150px"
                  containerWidth="300px"
                  imageHeight="200px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={true}
                  showTooltip={true}
                  displayOverlayContent={false}
                  overlayContent={
                    <p className="mt-7  tilted-card-demo-text">
                      {card.captionText}
                    </p>
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="text-center mt-8">
         
        <See
              clr="#7808d0"
              className="mt-12 ms-2"
              onClick={() => setShowAll(prev => !prev)}
            >
              {showAll ? "See Less" : "See More"}
            </See>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
