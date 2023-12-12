import React, { useState } from 'react';

const Image = () => {
    const [newDiv, setNewDiv] = useState(null);
    const [newImg, setNewImg] = useState(null);
  
    const handleAddButtonClick = () => {
      if (!newDiv) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = require("./img/city.png");
        img.alt = 'New img';
        document.querySelector('.buttons').before(div);
        div.append(img);
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        setNewDiv(div);
        setNewImg(img);
      }
    };
  
    const handleIncreaseButtonClick = () => {
      if (newDiv) {
        newImg.style.width = `${newImg.width * 1.5}px`;
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };
  
    const handleDecreaseButtonClick = () => {
      if (newDiv) {
        newImg.style.width = `${newImg.width * 0.5}px`;
        document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };
  
    const handleRemoveButtonClick = () => {
      if (newDiv) {
        newDiv.remove();
        newImg.remove();
        setNewDiv(null);
        setNewImg(null);
      }
    };
  
    return (
      <div>
        <a href="https://lviv.travel/ua/news/arkhitektura-baroko-u-lvovi" target="_blank" rel="noreferrer" className="lvivImg">
          <img src={require("./img/city.png")} alt="Львів" />
        </a>
        <div className="buttons">
          <button className="addImgButton" onClick={handleAddButtonClick}>Додати</button>
          <button className="increaseImgButton" onClick={handleIncreaseButtonClick}>Збільшити</button>
          <button className="decreaseImgButton" onClick={handleDecreaseButtonClick}>Зменшити</button>
          <button className="removeImgButton" onClick={handleRemoveButtonClick}>Видалити</button>
        </div>
      </div>
    );
  };

  export default Image;