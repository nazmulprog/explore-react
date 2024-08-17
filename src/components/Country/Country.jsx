import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name,flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4>{visited ? 'Visited' : 'Not Visited'}</h4>
            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Code: {cca3}</h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <br /><br />
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
        </div>
    );
};

export default Country;