import React from "react";
import PropTypes from "prop-types";
import {Title} from "../index";
import Project from "../Project/Project";
import { Card } from 'semantic-ui-react'

import "./ProjectSection.scss"

const renderProject = (project) =>
    <Project
        key={project.name}
        className={`project-section__content`}
        {...project} />

const ProjectSection = ({ title, projects, itemsPerRow }) => (
    <section className="project-section__wrapper">
        <Title>{title}</Title>
        <Card.Group fluid className="project-section__container" itemsPerRow={itemsPerRow}>
            { projects.map(renderProject) }
        </Card.Group>
    </section>
);

ProjectSection.propTypes = {
    title: PropTypes.string.isRequired,
    itemsPerRow: PropTypes.number.isRequired,
    projects: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
        description: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string)
            .isRequired,
    }),
};
ProjectSection.defaultProps = {
    projects: []
};

export default ProjectSection;
