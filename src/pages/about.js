import React from "react"

import { Layout, SEO, AboutMeContent } from "@components";
import "@styles/pages/about.scss";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="about-me__wrapper">
            <h2>About Me</h2>
            <AboutMeContent />
        </div>
    </Layout>
)

export default AboutPage
