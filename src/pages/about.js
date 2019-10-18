import React from "react"

import { Layout, SEO, AboutMeContent, WorkExperience } from "@components";
import "@styles/pages/about.scss";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="about-me__wrapper">
            <AboutMeContent />
            <WorkExperience />
        </div>
    </Layout>
)

export default AboutPage
