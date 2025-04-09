import React from "react";
import ScrollReveal from '../../components/Scroll';
import TiltedCard from "../../components/Cards";
import img1 from "../../assets/images/haseeb.webp"
import img2 from "../../assets/images/Auto.webp"
import img3 from "../../assets/images/Mind.webp"  
import img4 from "../../assets/images/Jafferi.webp"
import img5 from "../../assets/images/Nizam.webp"
import img6 from "../../assets/images/Teamo.webp"
import img7 from "../../assets/images/webflow.webp"
import { motion } from "framer-motion";


const Portfolio = () => {
    const cards = [
        {
          imageSrc: img1,
          altText: "Portfolio Project",
          captionText: "Haseeb Abro - Portfolio Project",
        },
        {
          imageSrc: img7,
          altText: "Webflow Project",
          captionText: "Webflow - Innovate Automations",
        },
        {
          imageSrc: img2,
          altText: "Auto History Inspection",
          captionText: "PHP - Auto History Inspection",
        },
        {
          imageSrc: img6,
          altText: "ReactJS",
          captionText: "ReactJS - Teamo",
        },
        {
          imageSrc: img3,
          altText: "MindCraft Innovation",
          captionText: "ReactJS - MindCraft Innovation",
        },
        {
          imageSrc: img4,
          altText: "Jafferi",
          captionText: "ReactJS - Jafferi",
        },
        
        {
          imageSrc: img5,
          altText: "Nizam",
          captionText: "ReactJS - Nizam",
        },  
        
      ];
    
      return (
        <div className="md:-mt-15 -mt-32">
         <ScrollReveal
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}

      >
        Portfolio
      </ScrollReveal>

        <div className="p-4 md:block hidden">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}    
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <TiltedCard
                imageSrc={card.imageSrc}
                altText={card.altText}
                captionText={card.captionText}
                containerHeight="350px"
                containerWidth="500px"
                imageHeight="350px"
                imageWidth="550px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={true}
                showTooltip={true}
                displayOverlayContent={false}
                overlayContent={
                  <p className="mt-7 ms-5 tilted-card-demo-text">
                    {card.captionText}
                  </p>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="p-4 md:hidden -mt-10 block">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-20 gap-x-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}    
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <TiltedCard
                imageSrc={card.imageSrc}
                altText={card.altText}
                captionText={card.captionText}
                containerHeight="150px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={true}
                showTooltip={true}
                displayOverlayContent={false}
                overlayContent={
                  <p className="mt-7 ms-5 tilted-card-demo-text">
                    {card.captionText}
                  </p>
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

</div>
      );
    };
    

export default Portfolio;
