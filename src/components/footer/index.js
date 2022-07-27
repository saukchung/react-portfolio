import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            position: "relative",
            bottom: "0px",
            display: "flex",
            justifyContent: "center",
            width: "90vw"
        },
        footerLinks: {
            flex: "1",
            display: "flex",
            justifyContent: "center"
        }
    }
    return (
        <div style={styles.footer}>
            <a style={styles.footerLinks} href="https://github.com/saukchung">This is my GitHub</a>
            <a style={styles.footerLinks} href="https://www.linkedin.com/in/sa-uk-chung-9787b3239/">This is my LinkedIn</a>
            <a style={styles.footerLinks} href="https://google.com">This is Google</a>
        </ div>
    )
}