import React from "react"
import ReactTypingEffect from "react-typing-effect"

import { Layout, SEO, Image } from "@components"
import "@styles/pages/index.scss"

const messages = [
    "A DEVELOPER.",
    "A CONSULTANT.",
    "A SPEAKER.",
    "AN OPEN SOURCE CONTRIBUTOR.",
    "KAUSTAV CHAKRABORTY",
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="home-page__wrapper">
          <Image className="home-image__wrapper" />
          <ReactTypingEffect
              className="home-page__typing-effect"
              text={messages}
              eraseDelay={2000}
              staticText="I'M"
          />

      </div>
  </Layout>
)

export default IndexPage
