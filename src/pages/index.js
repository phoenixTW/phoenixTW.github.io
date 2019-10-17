import React from "react"

import { Layout, SEO, Image } from "@components"
import "@styles/pages/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="home-page__wrapper">
          <Image className="home-image__wrapper" />
      </div>
  </Layout>
)

export default IndexPage
