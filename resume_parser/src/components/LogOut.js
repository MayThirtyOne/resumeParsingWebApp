import React from 'react'
import Sidebar from "./Sidebar";

import LogOutContent from "./content/LogOutContent";


function LogOut() {
    return (
        <div>
            <Sidebar main_content = {<LogOutContent/>} />
        </div>
    )
}

export default LogOut
