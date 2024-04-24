import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";

// Variant with separated helper function
// function renderCategoryItem(itemData) {
//   return (
//     <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
//   );
// }

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile title={item.title} color={item.color} />
      )} // Takes an item from renderCategoryItem and renders it into the list
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
