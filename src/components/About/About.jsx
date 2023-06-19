import React from 'react';
import './About.scss';

import { motion } from 'framer-motion';

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {delay: 0.1},
  }
}

export const About = () => {
  return (
    <motion.section
      className="main__about about"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div variants={animation} className="container about__container">
        Anate Studio is an independent videogames developer from Ukraine.
        <br/>
        Anate Studio creates point & click story-driven adventures for PC, Mac and Android devices.
        <br/>
        Check out our games and other projects.
      </motion.div>
    </motion.section>
  )
}