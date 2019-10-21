import regaugeImage from "@images/regauge-screenshot.png"

export const projects = [
    {
        title: `ThoughtWorks`,
        itemsPerRow: 1,
        projects: [
            {
                name: `Bahmni`,
                link: `https://bahmni.org`,
                description: `Bahmni is an easy-to-use EMR & hospital system. It combines and enhances existing open source products into a single solution.`,
                image: `https://images.squarespace-cdn.com/content/v1/54358a40e4b0d0810faf80c2/1467115582631-R9I05ZZJDSF7ZCROJF0X/ke17ZwdGBToddI8pDm48kB-HSVlIwK6j2It5xX9FvMBZw-zPPgdn4jUwVcJE1ZvWULTKcsloFGhpbD8VGAmRSamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIbNA0_PPgqt0atTv-1n3ou_CRlvyKbZbTpTOD_14uueA/image-asset.png?format=1000w`,
                technologies: [ `Java`, `AngularJS`, `React`, `MySQL` ]
            },
            {
                name: `DHIS2`,
                link: `https://dhis2.org`,
                description: `District Health Information Software 2 (DHIS2) is an open source, web-based health management information system (HMIS) platform.`,
                image: `https://s3-eu-west-1.amazonaws.com/content.dhis2.org/frontpage/key_indicators_example.jpeg`,
                technologies: [`Java`, `React`, `Postgresql`]
            },
        ]
    },
    {
        title: `Some Things I've Built`,
        itemsPerRow: 1,
        projects: [
            {
                name: `regauge`,
                link: `https://itchef.github.org/regauge`,
                description: `A command line interface for react app bundled with webpack, prettier and many more`,
                image: regaugeImage,
                technologies: [ `NodeJS`, `oclif` ]
            }
        ]
    }
]
