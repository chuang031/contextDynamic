import { useContext, useState } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

function Match(){
    const [match, setMatch] = useState(false)
const {sign} = useContext(HoroscopeContext)


    return(
    <div>
    <button onClick={()=>{ setMatch(!match)}}> Match</button>
   {match && <div>{sign.match} </div>}
   {/* {match ? true : false } left is true, right is false */}
    </div>)
}

export default Match;