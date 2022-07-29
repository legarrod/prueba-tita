import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-footer">
        Desarrollado por: Luis Evelio Garcia Rodriguez{' '}
      </p>
      <a
        href="https://www.linkedin.com/in/luisito-habla/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="icons-footer"
          src="https://w7.pngwing.com/pngs/972/654/png-transparent-social-media-computer-icons-linkedin-social-networking-service-social-media-blue-company-text.png"
          alt="Linkedin"
        />
      </a>
      <a href="https://luisitohabla.space/" target="_blank" rel="noreferrer">
        <img
          className="icons-footer"
          src="https://t4.ftcdn.net/jpg/03/23/20/33/360_F_323203349_MZdx9lOqn0z9ncjIBx8VmctMvB7rKzzX.webp"
          alt="Página web personal"
        />
      </a>
      <a
        href="https://www.youtube.com/c/LuisitoHabla/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="icons-footer"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-6-2.png"
          alt="Canal de Youtube LuisitoHabla"
        />
      </a>
    </div>
  );
};

export default Footer;
