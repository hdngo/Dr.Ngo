import React from 'react';
import { Link } from 'react-router-dom';

const FourZeroFour = () => {
    return (
        <div className='four-oh-four'>
            <h1 className='fohfour-header'>404</h1>
            <h3>Whoops! Looks like you took a detour, but no worries - life's all about impromptu trips!</h3> 
            <Link to={'/'} className='link'>Home</Link>
        </div>
    )
}

export default FourZeroFour;