import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css';

// components
import HomeSection from "./Components/HomeSection.jsx";
import NavBar from "./Components/NavBar.jsx";
import {CardMetions} from "./Components/CardMetions.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="min-h-[200vh]">
            <NavBar/>
            <HomeSection/>
            <div className="mt-24 flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
                <CardMetions/>
                <CardMetions/>
                <CardMetions/>
            </div>


        </div>
    </React.StrictMode>
)
