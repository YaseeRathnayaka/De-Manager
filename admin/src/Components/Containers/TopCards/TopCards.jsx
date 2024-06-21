import React from 'react';
import TopCardList from '../../../assets/Data/TopCardList';

const TopCards = () => {
  return (
    <div className='flex mt-4 ml-5 mr-4 space-x-2'>
      {TopCardList.map((card) => (
        <div key={card.id} className='w-1/3 h-32 p-4 bg-custom-light-blue rounded-xl'>
          <p className="font-bold">{card.title}</p>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TopCards;
