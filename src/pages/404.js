import React from "react"

import { Layout, SEO, Icon } from "@components/index"

import "@styles/pages/404.scss";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-page__wrapper">
        <Icon name="warning" size="xlarge" className="error-page__icon" />
        <h1>Page not found</h1>
    </div>
  </Layout>
)

export default NotFoundPage
