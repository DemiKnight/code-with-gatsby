import * as React from 'react';
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";


type PeopleData = {
    name: string
    title: string
    link: string
    imageName: string
}

type PeopleBoardProps = {
    content: PeopleData[]
}

const People = ({name, title, link,imageName}: PeopleData) => {
    return (<div>
        {/*<GatsbyImage src={`../images/people/${imageName}`} alt={"Hellow"} />*/}
        {/*<GatsbyImage image={}/>*/}
        {/*<img src={`../images/people/${imageName}`}   alt={"x"}/>*/}
        <a href={link}><p>{name}</p></a>
        <p>{title}</p>
    </div>);
}

const PeopleBoard: React.FC<PeopleBoardProps> = ({content}) => {

    return (<div>
        {content.map(People)}
    </div>);
}

export default PeopleBoard;
