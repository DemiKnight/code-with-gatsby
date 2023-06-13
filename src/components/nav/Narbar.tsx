import React from "react";
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
import NavItemLink from "./items/NavItemLink";
import NavItemContainer from "./NavItemContainer";
import NavOpenDyslexic from "./items/NavOpenDyslexic";

const NavContainer = styled.nav<{$active?: boolean; }>`
  display: flex;
  flex-direction: column;
  
  background-color: ${Colours.DarkPrimary};

  width: 100%;
  min-width: 270px;
  max-width: 300px;
  
`;

const NavLogo = styled.img``;

const NavItems = styled.ol`
  list-style: none;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
//
// const NavItemContainer = styled.li`
//   padding: 1em;
//   background-color: ${Colours.LightPrimary};
//
//   border: #333333;
//   border-style: dashed;
// `;

const NarBar = () => {

    return (<NavContainer>
        <button>X</button>
        <NavLogo src={""} alt="Minified Codewith logo"/>
        <NavItems>
            <NavItemLink icon={faHome} text={"Home"} urlLocation={"/"} />
            <NavItemLink icon={faCalendar} text={"Events"} urlLocation={"/events"} />
            <NavItemLink icon={faBookOpen} text={"About"} urlLocation={"/about"} />
            <NavItemLink icon={faBell} text={"Activities"} urlLocation={"/activities"} />
            <NavItemLink icon={faTools} text={"Resources"} urlLocation={"/resources"} />
            <NavItemLink icon={faUsers} text={"People"} urlLocation={"/people"} />
            <NavItemLink icon={faAddressBook} text={"Contact"} urlLocation={"/contact"} />
            <NavItemLink icon={faBook} text={"Code of Conduct"} urlLocation={"/code-of-conduct"} />
            <NavItemLink icon={faComment} text={"Feedback"} urlLocation={"/feedback"} />
            <NavItemLink icon={faQuestion} text={"FAQ"} urlLocation={"/faq"} />
            <NavItemLink icon={faPalette} text={"Branding"} urlLocation={"/branding"} />
            <NavOpenDyslexic />
        </NavItems>
    </NavContainer>)
}

export default NarBar;
