import * as React from 'react';
import {ReactElement} from 'react';
import NarBar from "./Narbar";
import styled from "styled-components";
import Title from "./Title";

type LayoutProps = {
    animatedLogo?: boolean,
    children: ReactElement[] | ReactElement
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  //width: 20vw;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 80vw;
  overflow: scroll;
`;

const MainContentContainer = styled.main`
    flex-grow: 2;
  width: 100%;
`;

const DefaultLayout: React.FC<LayoutProps> = ({animatedLogo = false, children}: LayoutProps) => {
    return (
       <AppContainer>
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
