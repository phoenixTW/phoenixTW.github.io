import React from "react";
import { Icon, List } from 'semantic-ui-react'

import OrgDetails from "../OrgDetails/OrgDetails";
import "./WorkExperience.scss"

const STEPInternship = () => (
    <div className="work-experience__container">
        <OrgDetails
            name="ThoughtWorks"
            link="//thoughtworks.com/STEP"
            role="Intern"
            start="July, 2014"
            end="June, 2016" />
        <div className="work-experience__content">
            <List>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Understand the various technology and contribute in the project workspance.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Designing and implementing the application architecture.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Collaborating teams based on multiple location and solve complex problems in collaborative way.
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    </div>
)

export default STEPInternship
