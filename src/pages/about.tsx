import * as React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from "../components/layout";
import PeopleBoard from "../components/peopleBoard";
import PeopleData from '../content/aboutPeople.yaml';


const AboutPage = () => {
    const data = useStaticQuery(graphql`
    
    `)

    return (<DefaultLayout>
        <AboutText/>
        <PeopleBoard content={PeopleData}/>
    </DefaultLayout>);
}

export default AboutPage;
