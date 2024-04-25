import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/data";

function MealsOverviewScreen({ route }) {
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

  function renderMealItem(itemData) {
    // const item = itemData.item;

    // const mealItemProps = {
    //   title: item.title,
    //   imageUrl: item.imageUrl,
    //   affordability: item.affordability,
    //   complexity: item.complexity,
    //   duration: item.duration,
    // };
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
