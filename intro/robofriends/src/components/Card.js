import React from 'react';

const card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='photo' src='https://robohash.org/test?200x200'/>
      <div>
        <h2>Terminator</h2>
        <p>terminator@skynet.com</p>
      </div>
    </div>
  );
}

export default card;
