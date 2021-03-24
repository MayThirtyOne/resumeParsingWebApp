import React from 'react'
import Sidebar from "./Sidebar";

import MySettingsContent from "./content/MySettingsContent";


function MySettings() {
    return (
        <div>
            <Sidebar main_content = {<MySettingsContent/>} />
        </div>
    )
}

export default MySettings
