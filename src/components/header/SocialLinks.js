import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
   
} from "react-icons/fa"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-primary ml-4"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={40} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={40} style={{ color: "light" }} />
                </span>
            </a>
           
        </div>
    )
}

export default SocialLinks