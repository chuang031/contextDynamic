import horoscopeObj from '../data/horoscopes';
import {useContext} from 'react'
import {HoroscopeContext} from '../context/HoroscopeContext'
const Navbar = () => {
  const horoscopes = Object.keys(horoscopeObj);
  const {setCurrentSign} = useContext(HoroscopeContext)
  console.log('nav render')
  return (
    <nav>
      {horoscopes.map(sign => (
        <span onClick= {()=>{setCurrentSign(sign)}} key={sign}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
