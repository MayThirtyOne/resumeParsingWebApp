import React from 'react'
import Sidebar from "./Sidebar";

import MyProfileContent from "./content/MyProfileContent";


function MyProfile() {
    return (
        <div>
            <Sidebar main_content = {<MyProfileContent/>} />
        </div>
    )
}

export default MyProfile
