import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "../MealItem";

export function MealList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    return (
      <MealItem
        id={item.id}
        title={item.title}
        imgUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
