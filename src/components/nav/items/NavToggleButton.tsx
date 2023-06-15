import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {LightSecondary} from "../../utils/Colours";


const NavToggleButtonContainer = styled.button`
  text-align: right;
  padding: 10px 20px;
  font-size: 20px;
  color: ${LightSecondary};
`;

const NavToggleButton = () => {

    return (<NavToggleButtonContainer>
        <FontAwesomeIcon icon={faTimes} size={"lg"}/>
    </NavToggleButtonContainer>);
}

export default NavToggleButton;
