import BackgroundVideo from "../layout/BackgroundVideo";

function MiddleSection(props) {
    return (
        <div>
        <BackgroundVideo/>

            <div className="my-skills" id="about" >
                <h2>About Me</h2>
                <h3 className="educ">Orion the Programmer</h3>
                <p className="education-description">
                I am a fullstack developer who enjoys solving problems. With programming, the act of developing new software and customizing their looks and feel fuels my need to be creative on a daily basis. 
                <br/>
                <br/>
                Since beginning my journey into software development I have learned and found ways to implement a variety of technologies including, but not limited to, HTML, CSS, Bootstrap, JavaScript, jQuery, API Git, Sass React, Node, Express, MongoDB, and SQL. 
                <br/>
                <br/>
                I love the idea that with technology, my potential to impact others is simply greater and I want to use my knowledge to craft intuitive products that aid people with what their needs.
                </p>
            </div>
            
        </div>
    );
}

export default MiddleSection;