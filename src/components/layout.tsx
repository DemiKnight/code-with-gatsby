import * as React from 'react';
import {ReactElement} from 'react';

type LayoutProps = {
    animatedLogo?: boolean,
    children: ReactElement[] | ReactElement
}

const DefaultLayout: React.FC<LayoutProps> = ({animatedLogo = false, children}: LayoutProps) => {
    // main-container
    return (
       <div className={"main-container"}>
           {/*<aside>sidebar</aside>*/}
           <main role="main" className="page-content" id="page-content">
               <h1>Code With</h1>
               {children}
           </main>
       </div>);
}

export default DefaultLayout;
