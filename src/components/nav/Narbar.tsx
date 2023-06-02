import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import * as Colours from '../utils/Colours';
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
import NavItem from "./NavItemProps";

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

const NavItemOld = styled.li`
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
            <NavItem icon={faHome} text={"Home"} urlLocation={"/"} />
            <NavItem icon={faCalendar} text={"Events"} urlLocation={"/events"} />
            <NavItem icon={faBookOpen} text={"About"} urlLocation={"/about"} />
            <NavItem icon={faBell} text={"Activities"} urlLocation={"/activities"} />
            <NavItem icon={faTools} text={"Resources"} urlLocation={"/resources"} />
            <NavItem icon={faUsers} text={"People"} urlLocation={"/people"} />
            <NavItem icon={faAddressBook} text={"Contact"} urlLocation={"/contact"} />
            <NavItem icon={faBook} text={"Code of Conduct"} urlLocation={"/code-of-conduct"} />
            <NavItem icon={faComment} text={"Feedback"} urlLocation={"/feedback"} />
            <NavItem icon={faQuestion} text={"FAQ"} urlLocation={"/faq"} />
            <NavItem icon={faPalette} text={"Branding"} urlLocation={"/branding"} />
            <NavItemOld>
                <button>
                    <FontAwesomeIcon icon={faFont} color={Colours.White} />
                    <span>Open Dyslexic</span>
                </button>
            </NavItemOld>
        </NavItems>
    </NavContainer>)
}

export default NarBar;
