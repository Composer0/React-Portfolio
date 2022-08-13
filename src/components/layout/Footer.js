import React from "react";

function Footer() {
    return (
        <div className="bottom-section">

            <a className="footer-link" href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ" rel="noopener noreferrer" target="_blank" ><i className="fab fa-youtube"></i></a>
            <a className="footer-link" href="https://www.linkedin.com/in/orion-palmer" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a className="footer-link" href="https://github.com/Composer0" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            <a className="footer-link" href="https://orionpalmer.hashnode.dev/" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-hashnode"></i></a>

            <p className="copyright">&copy;Orion Palmer</p>
        </div>
    );
}

export default Footer;