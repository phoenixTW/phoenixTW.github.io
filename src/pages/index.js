import React from "react"
import ReactTypingEffect from "react-typing-effect"

import { Layout, SEO, Image, Icon } from "@components"
import "@styles/pages/index.scss"

const messages = [
    "A DEVELOPER.",
    "A CONSULTANT.",
    "A SPEAKER.",
    "AN OPEN SOURCE CONTRIBUTOR.",
    "KAUSTAV CHAKRABORTY",
]

const icons = [
    { name: "github", link: "//github.com/phoenixTW" },
    { name: "medium", link: "//medium.com/@iamkaustav" },
    { name: "twitter", link: "//twitter.com/@iamkaustav" }
]

const renderIcons = icons =>
    icons.map(icon => (
        <a href={icon.link} target="__blank" key={icon.name}>
            <Icon name={icon.name} />
        </a>
    ))

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
          <div className="home-page__social-list">
              { renderIcons(icons) }
          </div>
      </div>
  </Layout>
)

export default IndexPage
