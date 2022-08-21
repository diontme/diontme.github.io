import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
    return (
        <div className="socials">
            <ul>
                <a href="https://www.github.com/diontme" target="_blank" rel="noreferrer">
                    <li><FaGithub /></li>
                </a>
                <a href="https://www.linkedin.com/in/dionteomengen" target="_blank" rel="noreferrer">
                    <li><FaLinkedin /></li>
                </a>
            </ul>
            <span>Get In Touch</span>
        </div>
        
)}