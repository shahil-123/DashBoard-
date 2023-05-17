import React, { useState } from 'react';

const HoverButtonPage = () => {
  const buttonData = [
    { id: 1, label: 'Recomended for you',  image:'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     description: 'If you need a lot of storage that you can move around, an external hard drive is a no-brainer, and we have options for almost everyone.' },
    { id: 2, label: 'Animated Advanture', image: 'https://images.pexels.com/photos/12096709/pexels-photo-12096709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     description: 'The Animated Adventure is a 2021 computer-animated adventure film inspired by the dance show Riverdance. The film was made by Cinesite for River' },
    { id: 3, label: 'Popular Shows', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     description: 'New shows come to the streaming giant all the time — too many to ever watch them all. We are here to help.' },
    { id: 4, label: 'New & Upcoming', image: 'https://images.pexels.com/photos/1649683/pexels-photo-1649683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    description: 'These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV' },
  ];

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="hover-button-page">
      {buttonData.map((button) => (
        <div
          key={button.id}
          className="hover-button-container"
          onMouseEnter={() => handleHover(button.id)}
          onMouseLeave={handleMouseLeave}
        >
        
          <button className="hover-button btn btn-danger m-2 mt-5" alt="Image">{button.label}</button>
          {hoveredButton === button.id && (
            <div className="image-description-container">
              <img src={button.image} alt="Image" className="hover-image " />
              <p className="description">{button.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverButtonPage;

