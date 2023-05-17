import * as React from 'react'

import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from "../components/layout";
import PeopleBoard from "../components/peopleBoard";
import PeopleData from '../content/aboutPeople.yaml';


const AboutPage = () => {
    return (<DefaultLayout>
        <AboutText/>
        <PeopleBoard content={PeopleData}/>
    </DefaultLayout>);
}

export default AboutPage;
