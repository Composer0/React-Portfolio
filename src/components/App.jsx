import React, {useState} from "react";
// import Events from "script";
// import Header from "./layout/Header";
import {Navbar, SlideBar} from "./layout/Navigation/Navigation";
// import MiddleSection from "./layout/MiddleSection";
// import Projects from "./layout/Projects";
// import Showcase from "./layout/Showcase";
// import Contact from "./layout/Contact"
// import Footer from "./layout/Footer";
import ContactPage from './pages/ContactPage'
import HeaderPage from './pages/HeaderPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import TechPage from './pages/TechPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
            <Routes>
                <Route exact path="/" element=<HeaderPage /> />
                <Route exact path="/contact" element=<ContactPage /> />
                <Route exact path="/projects" element=<ProjectsPage /> />
                <Route exact path="/about" element=<AboutPage /> />
                <Route exact path="/tech" element=<TechPage /> />
            </Routes>
            {/* <div>
                <Header />
            </div>
            <div>
                <Showcase />
                <Projects />
            </div>
            <div>
                <MiddleSection />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div> */}
        </div>
</Router>
        );
    }
    
    export default App;