import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';
import Match from './Match'

const Detail = () => {
    const {sign} = useContext(HoroscopeContext)
  const horoscopesObj = useContext(HoroscopeContext);

  return (
    <div className='details'>
      <img
        src={sign.backgroundImg}
        alt={sign.name}
      />
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element} </h4>
      <h4>Traits:{sign.traits} </h4>
      <Match />
    </div>
  );
};

export default Detail;