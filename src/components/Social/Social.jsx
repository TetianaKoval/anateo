import React from 'react';
import './Social.scss';

export const Social = () => {
  return (
    <section className="social main__social">
      <div className="container social__container">
        <a target="blank" href="https://www.instagram.com/anatestudio/" className="social__instagram social__icon"> </a>
        <a target="blank" href="https://www.twitch.tv/anate01" className="social__twitch social__icon"> </a>
        <a target="blank" href="https://soundcloud.com/user-526111769" className="social__soundcloud social__icon"> </a>
        <a target="blank" href="http://steamcommunity.com/groups/anatestudio?l=russian" className="social__steam social__icon"> </a>
        <a target="blank" href="https://www.youtube.com/channel/UC5HH4Ks09GheSPaEiUOgGvw" className="social__youtube social__icon"> </a>
        <a target="blank" href="https://anatolii.itch.io/" className="social__itch social__icon"> </a>
        <a target="blank" href="https://www.facebook.com/groups/anatestudio/" className="social__facebook social__icon"> </a>
        <a target="blank" href="https://twitter.com/anatestudio" className="social__twitter social__icon"> </a>
      </div>
    </section>
  )
}