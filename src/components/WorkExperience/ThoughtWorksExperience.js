import React from "react";
import { Icon, List } from 'semantic-ui-react'

import OrgDetails from "../OrgDetails/OrgDetails";

const ThoughtWorksExperience = () => (
    <div className="work-experience__container">
        <OrgDetails
            name="ThoughtWorks"
            link="//thoughtworks.com"
            role="Application Developer"
            start="July, 2016" />
        <div className="work-experience__content">
            <List>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Write modern, performant, maintainable code for a diverse array of client and internal projects.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Leading and Mentoring client and internal project teams.
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    </div>
)

export default ThoughtWorksExperience
