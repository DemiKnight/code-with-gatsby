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
  //width: 15vw;
  width: 100%;
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
  //gap-row: 8px;
  //width: 100%;
  width: 70%;
  
  margin: 0; //todo remove once global style
  padding: 0;
`;

const NavItem = styled.li`
  padding: 1em;
  background-color: ${Colours.LightPrimary};
  
  //width: 100%;
  
  border: #333333;
  border-style: dashed;
  //text-align: center;
`;


const NavText = styled.text`
  color: ${Colours.White};
  text-decoration: none;
  
  //text-decoration-style: ;
`;


const NarBar = () => {


    return (<NavContainer>
        <button>X</button>
        <img src={""} alt="Minified Codewith logo"/>
        <NavItems>
            <NavItem>
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <FontAwesomeIcon icon={faHome} color={Colours.White}/>
                    <NavText>Home</NavText>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/events"><FontAwesomeIcon icon={faCalendar} color={Colours.White} /><NavText>Events</NavText></Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBookOpen} color={Colours.White} />
                <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBell} color={Colours.White} />
                <Link to="/activities">Activities</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faTools} color={Colours.White} />
                <Link to="/resources">Resources</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faUsers} color={Colours.White} />
                <Link to="/people">People</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faAddressBook} color={Colours.White} />
                <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faBook} color={Colours.White} />
                <Link to="/code-of-conduct">Code of Conduct</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faComment} color={Colours.White} />
                <Link to="/feedback">Feedback</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faQuestion} color={Colours.White} />
                <Link to="/faq">FAQ</Link>
            </NavItem>
            <NavItem>
                <FontAwesomeIcon icon={faPalette} color={Colours.White} />
                <Link to="/branding">Branding</Link>
            </NavItem>
            <NavItem>
                <button>
                    <FontAwesomeIcon icon={faFont} color={Colours.White} />
                    <span>Open Dyslexic</span>
                </button>
            </NavItem>
        </NavItems>
    </NavContainer>)
}

export default NarBar;
