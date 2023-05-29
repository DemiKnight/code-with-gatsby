import React from "react";
import {Link} from "gatsby";


const NarBar = () => {

    return (<nav>
        <ol><Link to="/">Home</Link></ol>
        <ol><Link to="/events">Events</Link></ol>
        <ol><Link to="/about">About</Link></ol>
        <ol><Link to="/resources">Resources</Link></ol>
        <ol><Link to="/people">People</Link></ol>
        <ol><Link to="/contact">Contact</Link></ol>
        <ol><Link to="/code-of-conduct">Code of Conduct</Link></ol>
        <ol><Link to="/feedback">Feedback</Link></ol>
        <ol><Link to="/faq">FAQ</Link></ol>
        <ol><Link to="/branding">Branding</Link></ol>
        <ol><button >Open Dyslexic</button></ol>
    </nav>)
}

export default NarBar;
