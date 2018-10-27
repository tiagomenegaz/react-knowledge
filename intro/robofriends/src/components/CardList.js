import React from 'react';
import Card from './Card';

const Cardlist = ({ elements }) => {
  const cards = elements.map((element, i) => {
    return (
      <Card
        key={ elements[i].id }
        id={ elements[i].id }
        name={ elements[i].name }
        email={ elements[i].email }
      />
    );
  });

  return (
    <div>
      { cards }
    </div>
  );
}

export default Cardlist;
