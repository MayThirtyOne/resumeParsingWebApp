import React from 'react'

import Sidebar from "./Sidebar";

import HomePageContent from "./content/HomePageContent";

function HomePage() {
    return (
        <div>
            <Sidebar main_content = {<HomePageContent/>} />
        </div>
    )
}

export default HomePage
