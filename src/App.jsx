import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css';

// components
import HomeSection from "./Components/HomeSection.jsx";
import NavBar from "./Components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="min-h-[200vh]">
            <NavBar />
           <HomeSection />
        </div>
    </React.StrictMode>,
)
