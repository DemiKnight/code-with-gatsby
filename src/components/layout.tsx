import * as React from 'react';
import {ReactElement} from 'react';

type LayoutProps = {
    animatedLogo?: boolean,
    children: ReactElement[]
}

const DefaultLayout: React.FC<LayoutProps> = ({animatedLogo = false, children}: LayoutProps) => {

    return (<main>
        <h1>Code With</h1>
        {children}
    </main>);
}

export default DefaultLayout;
