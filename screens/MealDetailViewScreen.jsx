import { useLayoutEffect } from "react";
import MealDetailView from "../components/MealDetailView";
import { MEALS } from "../data/dummy-data";

function MealDetailViewScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.filter((item) => item.id == mealId);

  const [mealDetails] = mealData;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetails.title,
    });
  }, [navigation]);

  return <MealDetailView {...mealDetails} />;
}

export default MealDetailViewScreen;
