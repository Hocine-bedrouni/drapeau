import React from 'react';

const logo = () => {
    return (
        <div className='logo'>
           {/*Les images importées depuis la balise IMG sont accessibles dans "public"*/}
             
            <img src="./logo192.png" alt="logo react" />
            <h3>Mon Logo React</h3>
        </div>
    );
};

export default logo;