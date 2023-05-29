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
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContentContainer = styled.main`
    flex-grow: 2;
`;

const DefaultLayout: React.FC<LayoutProps> = ({animatedLogo = false, children}: LayoutProps) => {
    return (
       <AppContainer>
           <NarBar />
           <ContentContainer>
                <Title />
                <MainContentContainer role="main">
                    {children}
                </MainContentContainer>
           </ContentContainer>
       </AppContainer>);
}

export default DefaultLayout;
