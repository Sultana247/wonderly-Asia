import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const Root = () => {
    return (
        <div className='playfair-display-font'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;