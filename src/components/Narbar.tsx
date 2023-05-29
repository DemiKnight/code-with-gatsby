import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";


const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  
  width: 20vw;

  border: red;
  border-style: dashed;
`;

const NavLogo = styled.img``;

const NavItems = styled.ol`
  list-style: none;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  
  margin: 0; //todo remove once global style
  padding: 0;
`;

const NavItem = styled.li`
  padding: 1em;
  border: #333333;
  border-style: dashed;
  text-align: center;
`;

const NarBar = () => {

    return (<NavContainer>
        <button>X</button>
        <img src={""} alt="Minified Codewith logo"/>
        <NavItems>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/events">Events</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>
            <NavItem><Link to="/resources">Resources</Link></NavItem>
            <NavItem><Link to="/people">People</Link></NavItem>
            <NavItem><Link to="/contact">Contact</Link></NavItem>
            <NavItem><Link to="/code-of-conduct">Code of Conduct</Link></NavItem>
            <NavItem><Link to="/feedback">Feedback</Link></NavItem>
            <NavItem><Link to="/faq">FAQ</Link></NavItem>
            <NavItem><Link to="/branding">Branding</Link></NavItem>
            <NavItem>
                <button>Open Dyslexic</button>
            </NavItem>
        </NavItems>
    </NavContainer>)
}

export default NarBar;
