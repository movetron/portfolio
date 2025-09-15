import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => {
  return (
    <Tilt
      className="max-w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Введение</p>
        <h2 className={styles.sectionHeadText}>О себе</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', undefined, 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Я разработчик программного обеспечения с опытом работы в TypeScript, JavaScript и Node.js.
        Также работаю в таких фреймворках как React, Electron и Three.js. Я быстрый ученик и тесно
        сотрудничаю с клиентами, чтобы создавать эффективные, масштабируемые и удобные решения,
        которые решают реальные проблемы. Давайте работать вместе, чтобы воплотить идеи в жизнь!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
