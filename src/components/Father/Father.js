import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Myself from '../Myself/Myself';


const Father = ({ house, ornament }) => {

    return (
        <div>
            <h4>Father</h4>
            <p>House: {house}</p>
            <div style={{ display: 'flex' }}>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
                <Myself house={house} ornament={ornament}></Myself>
            </div>
        </div>
    );
};

export default Father;