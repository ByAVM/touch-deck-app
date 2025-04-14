import { Link } from "react-router";
import { homePageRecipe } from "./style";
import { VStack } from "@styled-system/jsx";

export const Home = () => {
  const classes = homePageRecipe();

  return (
    <VStack className={classes.root} justify="center">
      <h1 className={classes.title}>Touch Deck</h1>
      <h2 className={classes.subtitle}>Control the game from your browser</h2>
      <Link className={classes.action} to="/app">
        Go to app
      </Link>
    </VStack>
  );
};
