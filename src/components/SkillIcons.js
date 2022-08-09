import React from 'react';

function SHOWSKILLS(props) {
    return(
        <div key={props.key}>
        <span className="hovertext" data-hover={props.dataHover}>
            <img className="skill-icons" src={props.img} alt={props.alt}/>
        </span>
    </div>
    );
}

export default SHOWSKILLS;