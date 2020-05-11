import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> */}
            <p>{ subtitulo }</p>
        </>
    );
        
} 

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;