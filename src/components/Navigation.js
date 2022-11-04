import {NavLink} from 'react-router-dom'
import React from 'react';

const navigation = () => {
    return (
        <div className='bg-yellow-300 inline-flex'>
          
                <NavLink to="/home">
                    <h3 className='mr-50'>accueil</h3>
                </NavLink>
                <NavLink to="/about">
                    <h3 className='pl-200'>à propos</h3>
                </NavLink>
                <NavLink to="/about">
                    <h3 className='ml-20'>à propos</h3>
                </NavLink>
           
            
        </div>
    );
};

export default navigation;