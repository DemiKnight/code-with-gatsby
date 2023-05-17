import * as React from 'react';


type PeopleData = {
    name: string
    title: string
    link: string
}

type PeopleBoardProps = {
    content: PeopleData[]
}

const People = ({name, title, link}: PeopleData) => {
    return (<div>
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
