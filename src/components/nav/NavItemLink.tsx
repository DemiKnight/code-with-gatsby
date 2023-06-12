import * as React from 'react';
import {IconProp,} from '@fortawesome/fontawesome-svg-core'
import styled from "styled-components";
import * as Colours from "../utils/Colours";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";
import {CSSProperties} from "react";

const NavItemContainer = styled.li`
  width: 85%;
  box-sizing: border-box;
`;

type NavItemProps = {
    icon: IconProp,
    text: string,
    urlLocation: string
}

const NavText = styled.text`
  color: ${Colours.White};
  text-decoration: none;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: inherit;
  width: 100%;
  display: block;
  background-color: ${Colours.LightPrimary};
  box-sizing: border-box;
  border-radius: 0.75rem;

  padding: 15px 30px 15px 20px;
  border: #333333;
  border-style: dashed;
`;

const NavItemLink: React.FC<NavItemProps> = (props, context) => {
    return (<NavItemContainer>
        <StyledLink to={props.urlLocation} >
            <FontAwesomeIcon icon={props.icon} color={Colours.White} />
            <NavText>{props.text}</NavText>
        </StyledLink>
    </NavItemContainer>)
};

export default NavItemLink;
