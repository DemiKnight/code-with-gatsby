import * as React from 'react';
import styled from "styled-components";
import * as Colours from "../../utils/Colours";
import NavItemContainer from "../NavItemContainer";
import {faFont} from "@fortawesome/free-solid-svg-icons";
import {NavIcon, NavText} from "./NavItemLink";

const OpenDyslexicButton = styled.button`
  //color: inherit;
  width: 100%;
  display: block;
  //background-color: ${Colours.LightPrimary};
  background-color: darkorange;
  color: ${Colours.Black};
  box-sizing: border-box;
  border-radius: 0.75rem;

  padding: 15px 30px 15px 20px;
`;

const NavOpenDyslexic = () => {
    return (
        <NavItemContainer>
            <OpenDyslexicButton >
                <NavIcon icon={faFont} color={Colours.Black} />
                <span>Open Dyslexic</span>
            </OpenDyslexicButton>
        </NavItemContainer>
    );
}

export default NavOpenDyslexic;
