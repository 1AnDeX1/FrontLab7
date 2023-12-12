import React from 'react';
import GoodsCard from './GoodsCard'; // Шлях до компонента GoodsCard

const products = [
  {
    id: 1,
    name: 'Apple',
    price: '$3',
    image: require("./img/apple.jpg"),
  },
  {
    id: 2,
    name: 'Banana',
    price: '$2',
    image: require("./img/banana.jpg"),
  },
  {
    id: 3,
    name: 'Grape',
    price: '$7',
    image: require("./img/grape.jpg"),
  },
  {
    id: 4,
    name: 'Mandarin',
    price: '$3',
    image: require("./img/mandarin.jpeg"),
  },
  {
    id: 5,
    name: 'Orange',
    price: '$5',
    image: require("./img/orange.jpg"),
  },
  {
    id: 6,
    name: 'Peach',
    price: '$6',
    image: require("./img/peach.jpg"),
  },
  {
    id: 7,
    name: 'Pear',
    price: '$8',
    image: require("./img/pear.jpeg"),
  },
  {
    id: 8,
    name: 'Pineapple',
    price: '$10',
    image: require("./img/pineapple.jpeg"),
  },
];

function Gallery() {
  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
