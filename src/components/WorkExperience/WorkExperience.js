import React from "react";
import { Menu, Segment, Grid } from "semantic-ui-react"
import { Title } from "../index";

import ThoughtWorksExperience from "./ThoughtWorksExperience";
import STEPInternship from "./STEPInternship";
import "./WorkExperience.scss"

const experienceMap = {
    "ThoughtWorks": ThoughtWorksExperience,
    "ThoughtWorks Internship": STEPInternship
}

export default class WorkExperience extends React.PureComponent {
    state = { activeItem: 'ThoughtWorks' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <section className="work-experience__wrapper">
                <Title>Work Experience</Title>
                <Grid className="work-experience__container">
                    <Grid.Column width={6}>
                        <Menu pointing secondary vertical>
                            <Menu.Item
                                name='ThoughtWorks'
                                active={activeItem === 'ThoughtWorks'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='ThoughtWorks Internship'
                                active={activeItem === 'ThoughtWorks Internship'}
                                onClick={this.handleItemClick}
                                className="work-experience__menu-item"
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={10}>
                        <Segment>
                            { React.createElement(experienceMap[activeItem]) }
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        )
    }
}
