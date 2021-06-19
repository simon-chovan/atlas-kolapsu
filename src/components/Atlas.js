import React from 'react';
import { NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-css'

const Atlas = () => {
    return (
        <div>
            <Header />
            <p>DEBUG: Atlas</p>
            <Masonry />
        </div>
    );
}

export default Atlas;