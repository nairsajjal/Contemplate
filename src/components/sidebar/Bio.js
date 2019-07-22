import React from "react"
import "./sidebar.css"

import dp from "../../images/sajjal_DP.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={dp} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio