import React from 'react';
import Renkler from '../higherComponents/Renkler.js';

const Hakkimizda = (props) => {
    //console.log(props);
    /*
    setTimeout(() => {
        props.history.push('/')
    }, 2000)
    */
    return (
        <div className="container">
            <h4 className="center">Hakkimizda</h4>
            <p>Hakkimizda Icerigi</p>
        </div>
    )
}

export default Renkler(Hakkimizda);