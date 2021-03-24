import React from 'react'
import Sidebar from "./Sidebar";
import EditResumeContent from "./content/EditResumeContent"


function EditResume() {
    return (
        <div>
            <Sidebar main_content = {<EditResumeContent/>} />

        </div>
    )
}

export default EditResume
