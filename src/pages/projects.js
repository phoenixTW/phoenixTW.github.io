import React from "react"

import { Layout, SEO, ProjectSection } from "@components";
import { projects } from "@config"
import "@styles/pages/about.scss";

const renderSection = (section) => <ProjectSection key={section.title} {...section} />

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <div className="projects__wrapper">
            { projects.map(renderSection) }
        </div>
    </Layout>
)

export default ProjectsPage
