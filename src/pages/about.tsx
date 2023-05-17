import * as React from 'react'

import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from "../components/layout";
import PeopleBoard from "../components/peopleBoard";

const AboutPage = () => {
    return (<DefaultLayout >
        <AboutText />
        <PeopleBoard />
    </DefaultLayout>);
}

export default AboutPage;
