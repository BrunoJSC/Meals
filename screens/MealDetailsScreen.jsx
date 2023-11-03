import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { MealDetails } from "../components/MealDetails";
import { List } from "../components/MealDetails/List";
import { Subtitle } from "../components/MealDetails/Subtitle";
import { MEALS } from "../data/dummy-data";

export function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Favorite button pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            onPress={headerButtonPressHandler}
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.rootContainer}
    >
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle style={styles.subtitle}>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle style={styles.subtitle}>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },

  detailsText: {
    color: "white",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },
});
