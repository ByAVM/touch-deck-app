import { Link } from "react-router";
import { homePageHeroRecipe, homePageRecipe } from "./style";
import { Box, Container, VStack } from "@styled-system/jsx";
import { homeMessages, howToMessages } from "./messages";
import { FormattedMessage } from "react-intl";
import { VerticalTimeline } from "@shared/ui/VerticalTimeline";
import { css } from "@styled-system/css";
import { IconChevronsDown } from "@tabler/icons-react";

const timelineItems = [
  {
    title: "MVP",
    completed: true,
    description:
      "The first working version of the app with basic functionality and several panels.",
  },
  {
    title: "Panel editor",
    description:
      "The panel editor from the app interface with the ability to import and export your own panels in JSON.",
  },
  {
    title: "More controls",
    description:
      "Adding new control elements for greater variety and convenience in using the panels.",
  },
  {
    title: "Themes",
    description:
      "Adding themes for the application and themes for control elements.",
  },
  {
    title: "Progressive Web App",
    description:
      "Adding functionality to save the application locally on your device, preserving your data, settings, and updates.",
  },
];

export const Home = () => {
  const classes = homePageRecipe();
  const heroClasses = homePageHeroRecipe();

  return (
    <>
      <div className={heroClasses.root}>
        <Container height="full">
          <VStack className={classes.root} justify="center">
            <h1 className={classes.title}>
              <FormattedMessage {...homeMessages.heading} />
            </h1>
            <h2 className={classes.subtitle}>
              <FormattedMessage {...homeMessages.subtitle} />
            </h2>
            <Link className={classes.action} to="/app">
              <FormattedMessage {...homeMessages.actionButton} />
            </Link>

            <IconChevronsDown
              size={64}
              className={css({
                mt: 'auto',
                mb: '32',
                animation: "bounce",
                stroke: "sky.500",
                filter: 'drop-shadow(0 0 6px var(--shadow-color))',
                shadowColor: "sky.500",
              })}
            />
          </VStack>
        </Container>
      </div>

      <Container pb="2">
        <Box pt="10">
          <h2 className={classes.h2}>
            <FormattedMessage {...homeMessages.whatIsItHeading} />
          </h2>

          <div
            className={css({
              color: "sky.500",
            })}
          >
            <FormattedMessage
              {...homeMessages.aboutText}
              values={{
                p: (chunks) => <p className={css({ my: 2 })}>{chunks}</p>,
              }}
            />
          </div>
        </Box>

        <Box pt="10">
          <h2 className={classes.h2}>
            <FormattedMessage {...homeMessages.howToHeading} />
          </h2>

          <div
            className={css({
              color: "sky.500",
            })}
          >
            <ol className={css({ listStyleType: "decimal", pl: 4 })}>
              <li>
                <FormattedMessage
                  {...howToMessages.firstStep}
                  values={{
                    link: (
                      <a
                        href="https://github.com/BrunnerInnovation/vJoy"
                        target="_blank"
                        className={classes.link}
                      >
                        https://github.com/BrunnerInnovation/vJoy
                      </a>
                    ),
                  }}
                />
              </li>
              <li>
                <FormattedMessage
                  {...howToMessages.secondStep}
                  values={{
                    link: (
                      <a
                        href="https://github.com/ByAVM/touch-deck/releases"
                        target="_blank"
                        className={classes.link}
                      >
                        https://github.com/ByAVM/touch-deck/releases
                      </a>
                    ),
                  }}
                />
              </li>
              <li>
                <FormattedMessage {...howToMessages.thirdStep} />
              </li>
            </ol>

            <Box my="10" textAlign="center">
              <Link className={classes.action} to="/app">
                <FormattedMessage {...homeMessages.actionButton} />
              </Link>
            </Box>
          </div>
        </Box>

        <Box pt="10">
          <h2 className={classes.h2}>
            <FormattedMessage {...homeMessages.roadMapHeading} />
          </h2>

          <Box maxWidth="4xl" mx="auto">
            <VerticalTimeline items={timelineItems} />
          </Box>
        </Box>

        <Box pt="10">
          <p className={css({ color: "sky.500", fontSize: "sm" })}>
            <FormattedMessage
              {...homeMessages.builtWith}
              values={{
                typescript: (
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    className={classes.link}
                  >
                    TypeScript
                  </a>
                ),
                pandacss: (
                  <a
                    href="https://panda-css.com/"
                    target="_blank"
                    className={classes.link}
                  >
                    Panda
                  </a>
                ),
                arkui: (
                  <a
                    href="https://ark-ui.com/"
                    target="_blank"
                    className={classes.link}
                  >
                    Ark-UI
                  </a>
                ),
                rust: (
                  <a
                    href="https://www.rust-lang.org/"
                    target="_blank"
                    className={classes.link}
                  >
                    Rust
                  </a>
                ),
              }}
            />
          </p>
          <p className={css({ color: "sky.500", fontSize: "sm" })}>
            <FormattedMessage
              {...homeMessages.repo}
              values={{
                link: (
                  <a
                    href="https://github.com/ByAVM/touch-deck-app"
                    target="_blank"
                    className={classes.link}
                  >
                    Touch Deck App
                  </a>
                ),
              }}
            />
          </p>
        </Box>
      </Container>
    </>
  );
};
