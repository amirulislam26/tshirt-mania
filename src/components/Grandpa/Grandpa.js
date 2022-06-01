import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Antey from '../Antey/Antey';
import './Grandpa.css'


export const RingContext = createContext('Ring')
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h4>Granpa</h4>
                <p>House: {house}</p>
                <button className='button' onClick={handleBuyAHouse}>Buy A House</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Antey house={house}></Antey>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;