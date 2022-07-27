import React from 'react';
import pic from './ballin.gif';

export default function About() {
    const styles = {
        aboutContainer: {
            display: "flex",
        },
        aboutImage: {
            flex: "1"
        },
        aboutDiv: {
            flex: "1"
        }
    }
    return (
        <div style={styles.aboutContainer}>
            <img src={pic} alt="a .gif of a game of NBA" style={styles.aboutImage}></img>
            <div style={styles.aboutDiv}>
                <h2>Who am I?</h2>
                <p>THIS IS SUPPOSED TO BE ABOUT ME</p>
            </div>
        </div>
    )
}