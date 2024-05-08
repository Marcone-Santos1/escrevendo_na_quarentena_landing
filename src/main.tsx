import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/index.css';

import NavBar from "./Components/NavBar.tsx";
import HomeSection from "./Components/HomeSection.tsx";
import {CardMetions} from "./Components/CardMetions.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="min-h-[200vh]">
            <NavBar/>
            <HomeSection/>
            <div className="mt-24 flex flex-col w-full gap-2 justify-center items-center lg:flex-row">
                <CardMetions
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade=""
                />
                <CardMetions
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade=""
                />
                <CardMetions
                    name="Raissa"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga molestias quae quisquam sapiente totam vel! Aliquam aspernatur delectus earum ipsam iste minus neque ratione repellendus veniam vero! Exercitationem, fugit?"
                    grade=""
                />
            </div>


        </div>
    </React.StrictMode>,
)
