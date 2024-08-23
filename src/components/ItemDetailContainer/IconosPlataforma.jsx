import React from 'react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa';

const IconosPlataforma = ({ plataforma }) => {
  switch (plataforma) {
    case 'PC':
      return <FaWindows />;
    case 'MacOS':
      return <FaApple />;
    case 'Linux':
      return <FaLinux />;
    case 'PS4':
      return <FaPlaystation />;
    case 'PS5':
      return <FaPlaystation />;
    case 'Xbox One':
      return <FaXbox />;
    case 'Xbox Series X/S':
      return <FaXbox />;
    case 'Switch':
      return <img src="path/to/switch-icon.svg" alt="Switch" />;
    case 'PS3':
      return <FaPlaystation />;
    case 'Xbox 360':
      return <FaXbox />;
    case 'Wii':
      return <img src="path/to/wii-icon.svg" alt="Wii" />;
    default:
      return null;
  }
};

export default IconosPlataforma;