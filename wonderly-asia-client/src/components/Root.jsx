import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
const Root = () => {
    return (
        <div className='playfair-display-font '>
           
            <Header></Header>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;