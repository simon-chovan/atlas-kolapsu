import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-css'

class Atlas extends Component {
    constructor(props) {
    super(props);
    };
    render() {
        return (
            <div class="centered-column side-margins">
                <p>Som na stranke Atlasu</p>
                <Masonry></Masonry>
            </div>
        );
    } 
}

export default Atlas;