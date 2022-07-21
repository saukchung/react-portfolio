import React from 'react';
import './portfolio.css';

export default function Portfolio(props) {
    return (
        <div className='applications'>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
        </ div>
    )
}