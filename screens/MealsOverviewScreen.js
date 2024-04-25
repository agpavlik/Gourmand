import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/data";

function MealsOverviewScreen({ route }) {
  //  Get the ID off the category that is passed through navigation to this screen
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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
