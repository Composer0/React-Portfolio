import React from "react";

function Footer() {
    return (
        <div className="bottom-section">

            <a className="footer-link" href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            <a className="footer-link" href="https://www.linkedin.com/in/orion-palmer" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a className="footer-link" href="https://github.com/Composer0" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a className="footer-link" href="https://orionpalmer.hashnode.dev/" target="_blank" rel="noreferrer"><i className="fa-brands fa-hashnode"></i></a>

            <p className="copyright">&copy;Orion Palmer</p>
        </div>
    );
}

export default Footer;