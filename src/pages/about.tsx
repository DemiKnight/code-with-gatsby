import * as React from 'react'
import AboutText from '../content/AboutPage.mdx';
import DefaultLayout from "../components/layout";
import PeopleBoard from "../components/peopleBoard";
// @ts-ignore TODO Fix this
import PeopleData from '../data/people.yaml';
import {graphql, useStaticQuery} from "gatsby";

const AboutPage = () => {
    const data: Queries.PeopleDataQuery = useStaticQuery(PeopleDataQuery)

    return (<DefaultLayout>
        <p>{JSON.stringify(data.allDataYaml.edges.flatMap(x => x.node.people))}</p>
        <AboutText/>
        <PeopleBoard content={PeopleData.people}/>
    </DefaultLayout>);
}

export const PeopleDataQuery = graphql`
    query PeopleData {
        allDataYaml {
            edges {
                node {
                    people {
                        name
                        title
                        imageName
                        description

                    }
                }
            }
        }
    }
`

export default AboutPage;
