import React, { Component } from 'react';
import headerImage from '../pages/images/headerImage.jpg';

const headerImageDivStyle = {
    padding: 20,
    position: 'relative',
    top: '-10px',
    right: 0,
    height: '60vh',
    width: '120%',
    marginLeft: '-30px',
    alignItems: 'center',
    border: '1px',
    backgroundImage: `url(${ headerImage })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    textAlign: 'center',
    verticalAlign: 'middle',
}

const headerImageStyle = {
    width: '100%',
    height: '100%',
}

const headImageHeaderStyle = {
    color: 'white',
    marginTop: '25vh',
    marginLeft: '-200px',
    fontSize: '32px',
    fontFamily: 'Adele',
}

const HeaderImage = () => (
    <div style={ headerImageDivStyle }>
        <h1 style={ headImageHeaderStyle }>Programming, Studying and Traveling</h1>
    </div>
)


export default HeaderImage;
