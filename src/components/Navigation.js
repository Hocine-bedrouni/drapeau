import {NavLink} from 'react-router-dom'
import React from 'react';

const navigation = () => {
    return (
        <div className='bg-red-200 text-justify'>
          
                <NavLink to="/home">
                    <h3 className='text-start'>accueil</h3>
                </NavLink>
                <NavLink to="/about">
                    <h3 className='text-end'>à propos</h3>
                </NavLink>
           
            
        </div>
    );
};

export default navigation;