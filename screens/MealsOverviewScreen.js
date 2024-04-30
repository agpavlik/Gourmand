import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  // Get the ID off the category that is passed through navigation to this screen
  const catId = route.params.categoryId;

  // Load all the meals belong to exact category.
  // Return true if a meal has this categoryId in its array of category Ids.
  // Use indexOff for that and then we can use indexOf to get the indexOf item.
  // If we have a index greater or equal than zero, a category is part of that meal
  // because if we would not find a given category Id in that array indexOf would return minus one.
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // ---- Using meal category as a screen name
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  // ----

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
