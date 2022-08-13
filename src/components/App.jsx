import React from "react";
// import Events from "script";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation/Navigation";
import {BrowserRouter as Router} from 'react-router-dom';
import MiddleSection from "./layout/MiddleSection";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact"
import Footer from "./layout/Footer";

function App() {
    
    
    return (
<Router>

        <div className="backgroundColor">
            <Navigation />
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