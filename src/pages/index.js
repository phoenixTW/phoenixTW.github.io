import React from "react"

import { Layout, SEO, Image, Icon } from "@components"
import "@styles/pages/index.scss"

const messages = [
    "DEVELOPER.",
    "CONSULTANT.",
    "SPEAKER.",
    "OPEN SOURCE CONTRIBUTOR.",
]

const icons = [
    { name: "github", link: "//github.com/phoenixTW" },
    { name: "medium", link: "//medium.com/@iamkaustav" },
    { name: "twitter", link: "//twitter.com/@iamckaustav" }
]

const renderIcons = icons =>
    icons.map(icon => (
        <a href={icon.link} target="__blank" key={icon.name}>
            <Icon name={icon.name} />
        </a>
    ))

const role = messages.map((role, index) =>
    <span className="home-page__role" key={index}>{role}</span>
)

const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <div className="home-page__wrapper">
          <Image className="home-image__wrapper" />
          <section className="home-page__details-section">
              <div className="home-page__title-section">I'M KAUSTAV CHAKRABORTY</div>
              <div className="home-page__role-section">{ role }</div>
          </section>
          <div className="home-page__social-list">
              { renderIcons(icons) }
          </div>
      </div>
  </Layout>
)

export default IndexPage
