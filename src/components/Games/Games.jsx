import React from 'react';
import GamesList from './gamesList.json';
import './Games.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: 0.1 * custom},
  })
}

const firstWideElemnt = true;

export const Games = () => {
  return (
    <section
      className="main__games games"
    >
      <div className="container games__container" >
        {GamesList.map((game, index) => {
          return (
            <motion.article
              key={game.id}
              className={classNames(
                'games__game',
                'game',
                {game__standart: !firstWideElemnt || index !== 0},
                {game__wide: firstWideElemnt && index === 0}
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true}}
              variants={animation}
              custom={game.id}
            >
              <div className="game__image">
                <img src={game.image} alt={game.name} />
              </div>
              <h2 className="game__title">{game.name}</h2>
              <p className="game__description">{game.description}</p>
              <a className="game__button" href={game.link}>Read More</a>
              <div className="game__year">{game.year}</div>
            </motion.article>
          )
        }) }
      </div>
      
    </section>
  )
}