import React from 'react';

const Renkler = (WrappedComponent) => {
    const renkler = ['red', 'pink', 'green', 'blue', 'orange'];
    const randomRenk = renkler[Math.floor(Math.random() * 5)];

    const sinif = randomRenk + '-text';
    return (props) => {
        return (
            <div className={sinif}>
                <WrappedComponent{...props} />
            </div>
        )
    }
}

export default Renkler;