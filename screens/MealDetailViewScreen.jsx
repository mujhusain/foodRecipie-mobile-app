import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import MealDetailView from "../components/MealDetailView";
import { MEALS } from "../data/dummy-data";

function MealDetailViewScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.filter((item) => item.id == mealId);

  const [mealDetails] = mealData;

  function handleOnPress(){
    console.log("Pressed")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetails.title,
      headerRight:()=><IconButton icon={'heart'} color={'white'} onPress={handleOnPress} />
    });
  }, [navigation]);

  return <MealDetailView {...mealDetails} />;
}

export default MealDetailViewScreen;
