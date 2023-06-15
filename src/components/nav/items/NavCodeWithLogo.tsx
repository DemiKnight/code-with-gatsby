import * as React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";


const LogoLink = styled(props => <Link {...props} />)`
  padding: 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const NavCodeWithLogo = () => {
    return (
        <LogoLink to="/">
            <StaticImage
                src="../../../images/noun-keyboard-licensed-white.svg"
                alt="Minified Codewith logo"
                // width={145}
                // height={85}
                quality={100}
                objectFit={"fill"}
                layout={"fixed"}
                imgStyle={{width: 145, height: 85, objectFit: "contain"}}
                style={{marginBottom: "0.5em", width: 145, height: 85}}/>
        </LogoLink>
    );
};

export default NavCodeWithLogo;
