import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import * as Colours from './utils/Colours';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faBell, faBook,
    faBookOpen,
    faCalendar,
    faComment, faFont,
    faHome, faPalette, faQuestion,
    faTools,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav<{$active?: boolean; }>`
  display: flex;
  flex-direction: column;
  
  background-color: ${Colours.DarkPrimary};

  flex-shrink: 0;
  width: 15vw;
  min-width: 15vw;
  max-width: 17vw;

  border: red;
  border-style: dashed;
`;

const NavLogo = styled.img``;

const NavItems = styled.ol`
  list-style: none;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px; 
  
  margin: 0; //todo remove once global style
  padding: 0;
`;

const NavItem = styled.li`
  padding: 1em;
  background-color: ${Colours.LightPrimary};
  
  
  
  border: #333333;
  border-style: dashed;
  //text-align: center;
`;


const NarBar = () => {


    return (<NavContainer>
        <button>X</button>
        <img src={""} alt="Minified Codewith logo"/>
        <NavItems>
            <NavItem>
                <FontAwesomeIcon icon={faHome} />
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faCalendar} />
                <Link to="/events">Events</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBookOpen} />
                <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBell} />
                <Link to="/activities">Activities</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faTools} />
                <Link to="/resources">Resources</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faUsers} />
                <Link to="/people">People</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faAddressBook} />
                <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBook} />
                <Link to="/code-of-conduct">Code of Conduct</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faComment} />
                <Link to="/feedback">Feedback</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faQuestion} />
                <Link to="/faq">FAQ</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faPalette} />
                <Link to="/branding">Branding</Link>
            </NavItem>
            <NavItem>
                <button>
                    <FontAwesomeIcon icon={faFont} />
                    <span>Open Dyslexic</span>
                </button>
            </NavItem>
        </NavItems>
    </NavContainer>)
}

export default NarBar;
