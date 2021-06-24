import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-css'

import Image from './Image'
import Video from './Video'

import img from "../images/testimg.jpg"
import video from "../videos/cista4.mp4"


class Atlas extends Component {
    constructor(props) {
        super(props);
    };

    breakpointColumnsObj = {
        default: 3,
        1400: 2,
        800: 1
    };

    items = [
        {
            id: 1, title: 'My First Item',
            type: "image", src: img
        },
        {
            id: 2, title: 'Another item',
            type: "div", src: "/",

        },
        {
            id: 3, title: 'Third Item',
            type: "video", src: video,

        },
        {
            id: 4, title: 'Here is the Fourth',
            type: "div", src: "/",
        },
        {
            id: 5, title: 'Here is the 5th',
            type: "video", src: video,
        },
        {
            id: 6, title: 'Here is the 6th',
            type: "div", src: "/",
        },
        {
            id: 7, title: 'Here is the 7th',
            type: "video", src: video,
        },
        {
            id: 8, title: 'Here',
            type: "div", src: "/",
        },
        {
            id: 9, title: 'TEST',
            type: "image", src: img,
        },
        {
            id: 10, title: 'Whatever',
            type: "image", src: img,
        },
        {
            id: 11, title: 'Here comes the sun',
            type: "div", src: "/",
        },
    ];

    // Convert array to JSX items
    items = this.items.map(function (item) {
        if (item.type === 'image') {
            return <Image path={item.src} title={item.title} key={item.id} />
        }
        else if (item.type === 'video') {
            return <Video path={item.src} title={item.title} key={item.id} />
        }
        else {
            const min = 200;
            const max = 400;
            const rand = min + Math.random() * (max - min);
            const randpx = rand + "px";
            return <div style={{ height: randpx }} key={item.id} ></div>
        }
    });

    render() {
        return (
            <div class="centered-column">
                <Masonry
                    breakpointCols={this.breakpointColumnsObj}
                    className="atlas-grid"
                    columnClassName="atlas-grid_column"
                >
                    {this.items}
                </Masonry>
            </div>
        );
    }
}

export default Atlas;