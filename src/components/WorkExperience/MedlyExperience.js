import React from "react";
import { Icon, List } from 'semantic-ui-react'

import OrgDetails from "../OrgDetails/OrgDetails";

const MedlyExperience = () => (
    <div className="work-experience__container">
        <OrgDetails
            name="Medly"
            link="//medlypharmacy.com"
            role="Senior Application Developer"
            start="January, 2020" />
        <div className="work-experience__content">
            <List>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Build data centric and Secure product in Health Care domain.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Understanding and investigating the requirements and implement accordingly.
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name="right triangle" />
                    <List.Content>
                        <List.Description>
                            Actively involve in tasks of office operations.
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    </div>
)

export default MedlyExperience
