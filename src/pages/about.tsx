import * as React from 'react'
import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from "../components/layout";
import PeopleBoard from "../components/peopleBoard";
// @ts-ignore TODO Fix this
import PeopleData from '../data/people.yaml';


const AboutPage = () => {

    return (<DefaultLayout>
        <AboutText />
        <PeopleBoard content={PeopleData.people}/>
    </DefaultLayout>);
}

export default AboutPage;
