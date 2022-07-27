import React from 'react';
import kindlerPic from './kindler_moneyshot.png';

export default function Portfolio(props) {
    const styles = {
        picture: {
            width: "400px",
            height: "400px"
        }
    }
    return (
        <div className='applications'>
            <div className='app'>
                <img style={styles.picture} src={kindlerPic} alt=""></img>
                <h2>KINDLER</h2>
                <a href="https://guarded-castle-49878.herokuapp.com/">Deployed on Heroku</a>
            </div>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
            <div className='app'>
                <img src="https://picsum.photos/400/400" alt=""></img>
                <h2>Application 1</h2>
                <a href="#">LINK TO APP1</a>
            </div>
        </ div>
    )
}