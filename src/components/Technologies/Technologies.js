import React from 'react';
import {Icon, Title} from "../index";

import "./Technologies.scss"

const icons = [
    `node-js`,
    `html5`,
    `js`,
    `sass`,
    `angular`,
    `react`,
    `aws`
]

const renderIcon =
    icon => <Icon key={icon} name={icon} size="large" />

const Technologies = () => (
    <section className="technologies__wrapper">
        <Title>Technologies</Title>
        <div className="technologies__container">
            { icons.map(renderIcon) }
        </div>
    </section>
);

export default Technologies;
