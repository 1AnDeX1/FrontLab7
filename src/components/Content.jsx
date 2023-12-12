import React, { useState } from 'react';

function Content() {
  const [firstElementColor, setFirstElementColor] = useState('');
  const [secondElementColor, setSecondElementColor] = useState('');

  const handleFirstElementClick = () => {
    setFirstElementColor((prevColor) => {
      if (prevColor === 'lightblue') return 'lightred';
      if (prevColor === 'lightred') return 'lightblue';
      return 'lightblue';
    });
  };

  const handleSecondElementClick = () => {
    setSecondElementColor((prevColor) => {
      if (prevColor === 'lightyellow') return 'lightgreen';
      if (prevColor === 'lightgreen') return 'lightyellow';
      return 'lightyellow';
    });
  };

  return (
    <div className="content">
      <p>Моє хобі</p>
        <ul>
            <li>Бокс</li>
            <li>Плавання</li>
            <li>Баскетбол</li>
            <li>Комп'ютерні ігри</li>
        </ul>
        <p>Мої улюблені фільми</p>
        <ol>
            <li>Інтерстеллар</li>
            <li>Бійцівський клуб</li>
            <li>Роккі</li>
        </ol>
        <p>Улюблене місто, де я бував - Львів</p>
        <p>Львів - це чарівне місто в Україні, яке відоме своєю багатою історією, архітектурною красою і культурною спадщиною.</p>
      <p onClick={handleFirstElementClick} className={firstElementColor}>
        Місто сповнене середньовічних вуличок, готичних катедралей, ярмарків і кав'ярень, що надають йому особливий романтичний шар.
      </p>
      <p onClick={handleSecondElementClick} className={secondElementColor}>
        Львів також славиться своєю кухнею, де можна скуштувати смачні страви та солодощі.
      </p>
      <p>Незабутні враження гарантовані для кожного, хто відвідає це чудове місто.</p>
    </div>
  );
}

export default Content;
