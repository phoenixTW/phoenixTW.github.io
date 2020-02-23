import React from "react";
import { Menu, Segment, Grid } from "semantic-ui-react"
import { Title } from "../index";

import ThoughtWorksExperience from "./ThoughtWorksExperience";
import STEPInternship from "./STEPInternship";
import "./WorkExperience.scss"
import MedlyExperience from "./MedlyExperience";

const experienceMap = {
    "Medly": MedlyExperience,
    "ThoughtWorks": ThoughtWorksExperience,
    "ThoughtWorks Internship": STEPInternship
}

const defaultMenuConfig = {
    inverted: false,
    vertical: true,
    menuColumn: 6,
    segmentColumn: 10,
}

export default class WorkExperience extends React.PureComponent {
    state = {
        activeItem: 'Medly',
        ...defaultMenuConfig,
    }

    componentDidMount() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            this.setState({
                inverted: true,
                vertical: false,
                menuColumn: 16,
                segmentColumn: 16,
            })
        } else {
            this.setState({ ...defaultMenuConfig })
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const {
            activeItem,
            inverted,
            vertical,
            menuColumn,
            segmentColumn,
        } = this.state

        return (
            <section className="work-experience__wrapper">
                <Title>Work Experience</Title>
                <Grid className="work-experience__container">
                    <Grid.Column width={menuColumn}>
                        <Menu pointing secondary inverted={inverted} vertical={vertical}>
                            <Menu.Item
                                name='Medly'
                                active={activeItem === 'Medly'}
                                onClick={this.handleItemClick}
                            />
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
                    <Grid.Column stretched width={segmentColumn}>
                        <Segment>
                            { React.createElement(experienceMap[activeItem]) }
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        )
    }
}
