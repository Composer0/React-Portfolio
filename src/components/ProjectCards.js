import React from "react";


function PROJECTCARD(props) {
    return( 
        <div key={props.key} className="card" >
            <div className="card-header animated-bg" id="header">
                <a href={props.sLink} rel="noopener noreferrer" target="_blank">
                    <img src={props.image} alt={props.alt} />
                </a>    
            </div>
            <div className="card-content">
                <h3 className="card-title animated-bg animated-bg-text" id="title">{props.title}</h3>
                    <div className="project-info ">
                        <a className="footer-link" href={props.gLink} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        <a className="footer-link" href={props.yLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    </div>
                        <hr />
                    <p className="card-excerpt" >
                        {props.tech}
                        <br/>
                        {props.info}
                        <br/>
                        <br/>
                    </p>
                </div>
            </div>
    );
}

export default PROJECTCARD;