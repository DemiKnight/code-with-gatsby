import * as React from 'react';
import {GatsbyImage, getSrc, StaticImage} from "gatsby-plugin-image";


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
    return (<div className={"col-sm-5 col-md-4 col-lg-3 card text-center"}>
        <img className={"profile-photo"} src={`/people/${imageName}`}   alt={"x"}/>
        <a href={link}><p>{name}</p></a>
        <p>{title}</p>
    </div>);
}

const PeopleBoard: React.FC<PeopleBoardProps> = ({content}) => {

    return (<div className={"row committee-photos"}>
        {content.map(People)}
    </div>);
}

export default PeopleBoard;
