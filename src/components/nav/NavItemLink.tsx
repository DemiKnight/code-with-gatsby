import * as React from 'react';
import {IconProp,} from '@fortawesome/fontawesome-svg-core'
import styled from "styled-components";
import * as Colours from "../utils/Colours";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";

const NavItemContainer = styled.li`
  padding: 1em;
  background-color: ${Colours.LightPrimary};

  //width: 100%;

  border: #333333;
  border-style: dashed;
  //text-align: center;
`;

type NavItemProps = {
    icon: IconProp,
    text: string,
    urlLocation: string
}


const NavText = styled.text`
  color: ${Colours.White};
  text-decoration: none;

  padding-left: 10px;
`;

const NavLinkStyle = {color: "inherit", textDecoration: "none", width: "100%", height: "100%"}

const NavItemLink: React.FC<NavItemProps> = (props, context) => {
    return (<NavItemContainer>
        <Link to={props.urlLocation} style={NavLinkStyle}>
            <FontAwesomeIcon icon={props.icon} color={Colours.White}/>
            <NavText>{props.text}</NavText>
        </Link>
    </NavItemContainer>)
};

export default NavItemLink;
