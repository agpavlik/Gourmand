import { Text, View, StyleSheet } from "react-native";

import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/data";

function FavoritesScreen() {
  //useContext returns the context value for the context.
  // To determine the context value, React searches the component tree
  // and finds the closest context provider above for that particular context.
  const favoriteMealsCtx = useContext(FavoritesContext);

  // Filter will return an array with all the meals
  // that have an entry in IDs array in context.
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text>No favorite meales added yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
