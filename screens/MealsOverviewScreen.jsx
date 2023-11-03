import { useLayoutEffect } from "react";
import { MealList } from "../components/MealList/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    });

    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}
