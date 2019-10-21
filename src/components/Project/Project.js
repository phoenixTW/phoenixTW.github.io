import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from 'semantic-ui-react'

import "./Project.scss"


const defaultImage = `https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg`;

const Project = ({ className, name, link, description, technologies, image }) => (
    <Card raised className={className} link href={link}>
        <Image src={image || defaultImage} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            { technologies.map(tech => <span key={tech}> {tech} </span>) }
        </Card.Content>
    </Card>
);

Project.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
        .isRequired,
};
Project.defaultProps = {
    className: '',
    link: '',
    image: null,
    description: ''
};

export default Project;
