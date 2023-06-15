import * as React from 'react'
import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from '../components/layout';
import PeopleBoard from '../components/peopleBoard';
// @ts-ignore TODO Fix this
import PeopleData from '../data/people.yaml';
import {HeadFC} from "gatsby";


const AboutPage = () => {

    return (<DefaultLayout>
        <AboutText />
        <PeopleBoard content={PeopleData.people}/>
    </DefaultLayout>);
}

export const Head: HeadFC = () => <title>About Page</title>

export default AboutPage;


