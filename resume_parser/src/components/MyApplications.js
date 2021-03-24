import React from 'react'
import Sidebar from "./Sidebar";

import MyApplicationsContent from "./content/MyApplicationsContent";


function MyApplications() {
    return (
        <div>
            <Sidebar main_content = {<MyApplicationsContent/>} />
            
        </div>
    )
}

export default MyApplications
