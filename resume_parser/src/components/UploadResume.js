import React from 'react'
import Sidebar from "./Sidebar";

import UploadResumeContent from "./content/UploadResumeContent";


function UploadResume() {
    return (
        <div>
            <Sidebar main_content = {<UploadResumeContent/>} />
        </div>
    )
}

export default UploadResume
