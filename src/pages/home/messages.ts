import { defineMessages } from "react-intl";

export const homeMessages = defineMessages({
    heading: {
        id: "pages.home.heading",
        defaultMessage: 'Touch Deck'
    },
    subtitle: {
        id: "pages.home.subtitle",
        defaultMessage: 'Control the game from your browser'
    },
    actionButton: {
        id: "pages.home.actionButton",
        defaultMessage: 'Go to app'
    },
    roadMapHeading: {
        id: 'pages.home.roadMapHeadig',
        defaultMessage: 'Roadmap'
    },
    whatIsItHeading: {
        id: 'pages.home.whatIsItHeading',
        defaultMessage: 'What is it?'
    },
    aboutText: {
        id: 'pages.home.aboutText',
        defaultMessage: '<p>Control your games from any device! Our app turns your smartphone or tablet into a game controller.</p><p>The app consists of two parts: a client application for your computer with vJoy support, and a convenient web interface that connects to it over your local network. Control your games from your device — customize buttons, create your own panels, and play your favorite games however you like.</p><p>Perfect for managing simulators — it provides seamless interaction with the game, making control more comfortable and intuitive.</p>'
    },
    howToHeading: {
        id: 'pages.home.howToHeading',
        defaultMessage: 'How to install?'
    },
    builtWith: {
        id: 'pages.home.builtWith',
        defaultMessage: 'Built with: {typescript}, {pandacss}, {arkui}, {rust}'
    },
    repo: {
        id: 'pages.home.repo',
        defaultMessage: 'Repo: {link}'
    },
})

export const howToMessages = defineMessages({
    firstStep: {
        id: 'pages.home.howTo.firstStep',
        defaultMessage: 'First, you need to install the vJoy driver for your system (Windows 10 or Windows 11). The latest version is available in the repository: {link}.'
    },
    secondStep: {
        id: 'pages.home.howTo.secondStep',
        defaultMessage: 'After installing the driver, download and install the latest version of the client: {link}'
    },
    thirdStep: {
        id: 'pages.home.howTo.thirdStep',
        defaultMessage: 'After launching the client, use one of the obtained IP addresses on the connection page.'
    }
})