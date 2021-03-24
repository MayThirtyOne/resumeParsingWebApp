import React from 'react'
import Sidebar from "./Sidebar";

import SearchJobsContent from "./content/SearchJobsContent";


function SearchJobs() {
    return (
        <div>
            <Sidebar main_content = {<SearchJobsContent/>} />
        </div>
    )
}

export default SearchJobs
