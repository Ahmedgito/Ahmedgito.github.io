import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const Contribution = () => {
  return (
    <>
      <motion.h3
        className="text-4xl text-center md:text-5xl mb-10 mt-20 font-medium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        My Contributions
      </motion.h3>

      <motion.div
        className="flex justify-center overflow-x-auto mb-15 w-full px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="min-w-[320px]">
          <GitHubCalendar
            username="Ahmedgito"
            blockSize={15}
            blockMargin={5}
            color="#4c1d95"
            fontSize={14}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Contribution;
