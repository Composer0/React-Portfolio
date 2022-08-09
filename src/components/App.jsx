import React from "react";
// import Events from "script";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation"
import MiddleSection from "./layout/MiddleSection";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact"
import Footer from "./layout/Footer";

function App() {
    

    
    return (

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
        );
    }
    
    export default App;