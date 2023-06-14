import React from "react";
import styled from "styled-components";
import * as Colours from '../utils/Colours';
import {
    faAddressBook,
    faBell,
    faBook,
    faBookOpen,
    faCalendar,
    faComment,
    faHome,
    faPalette,
    faQuestion,
    faTools,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import NavItemLink from "./items/NavItemLink";
import NavOpenDyslexic from "./items/NavOpenDyslexic";
import NavCodeWithLogo from "./items/NavCodeWithLogo";
import NavToggleButton from "./items/NavToggleButton";

const NavContainer = styled.nav<{ $active?: boolean; }>`
  display: flex;
  flex-direction: column;

  background-color: ${Colours.DarkPrimary};

  overflow: scroll;
  
  width: 100%;
  min-width: 270px;
  max-width: 300px;
`;

const NavItems = styled.ol`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const NarBar = () => {

    return (<NavContainer>
        <NavToggleButton/>
        <NavCodeWithLogo/>
        <NavItems>
            <NavItemLink icon={faHome} text={"Home"} urlLocation={"/"}/>
            <NavItemLink icon={faCalendar} text={"Events"} urlLocation={"/events"}/>
            <NavItemLink icon={faBookOpen} text={"About"} urlLocation={"/about"}/>
            <NavItemLink icon={faBell} text={"Activities"} urlLocation={"/activities"}/>
            <NavItemLink icon={faTools} text={"Resources"} urlLocation={"/resources"}/>
            <NavItemLink icon={faUsers} text={"People"} urlLocation={"/people"}/>
            <NavItemLink icon={faAddressBook} text={"Contact"} urlLocation={"/contact"}/>
            <NavItemLink icon={faBook} text={"Code of Conduct"} urlLocation={"/code-of-conduct"}/>
            <NavItemLink icon={faComment} text={"Feedback"} urlLocation={"/feedback"}/>
            <NavItemLink icon={faQuestion} text={"FAQ"} urlLocation={"/faq"}/>
            <NavItemLink icon={faPalette} text={"Branding"} urlLocation={"/branding"}/>
            <NavOpenDyslexic/>
        </NavItems>
    </NavContainer>)
}

export default NarBar;
