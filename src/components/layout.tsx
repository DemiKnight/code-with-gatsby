import * as React from 'react';
import {ReactElement} from 'react';
import NarBar from "./nav/Narbar";
import styled from "styled-components";
import Title from "./Title";

type LayoutProps = {
    animatedLogo?: boolean,
    children: ReactElement[] | ReactElement
}

const AppContainer = styled.div<{openDyslexia: boolean}>`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  font-family: ${props => props.openDyslexia ? "'OpenDyslexic', sans-serif" : "'Roboto', sans-serif"};
  font-weight: 400;
  text-align: left;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  
  display: flex;
  flex-direction: column;
  
  overflow: scroll;
`;

const MainContentContainer = styled.main`
  flex-grow: 2;
  width: 100%;
`;

type Theme = {
    useOpenDyslexia: boolean
}

const DefaultLayout: React.FC<LayoutProps> = ({animatedLogo = false, children}: LayoutProps) => {
    return (
       <AppContainer openDyslexia={false}>
           <NarBar />
           <ContentContainer>
                <Title />
                <MainContentContainer>
                    {children}
                </MainContentContainer>
           </ContentContainer>
       </AppContainer>);
}

export default DefaultLayout;
