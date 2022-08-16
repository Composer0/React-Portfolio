import React, {useState} from "react";
// import Events from "script";
import Header from "./layout/Header";
import {Navbar, SlideBar} from "./layout/Navigation/Navigation";
import {BrowserRouter as Router} from 'react-router-dom';
import MiddleSection from "./layout/MiddleSection";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact"
import Footer from "./layout/Footer";

function App() {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        // exclamation point is important to set up the toggle action.
    }
    
    return (
<Router>

        <div className="backgroundColor">
            <SlideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <div>
                <Header />
            </div>
            <div>
                <MiddleSection />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
</Router>
        );
    }
    
    export default App;