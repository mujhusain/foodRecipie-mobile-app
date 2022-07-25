import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

function MealDetailView({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  return (
    <ScrollView style={styles.mealItem}>
      <View>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>Duration: {duration}m</Text>
          <Text style={styles.detailsItem}>{complexity?.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability?.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.recipie}>
        <Text style={styles.otherTitle}>INGREDIENTS</Text>
        <View style={styles.ingredents}>
          {ingredients.map((item, index) => (
            <Text style={styles.item} key={index}>
              {item}
            </Text>
          ))}
        </View>
        <Text style={styles.otherTitle}>STEPS</Text>
        <View style={styles.steps}>
          {steps.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item}
            </Text>
          ))}
        </View>
        <Text style={styles.otherTitle}>OTHER INFOS</Text>
        <Text style={styles.otherItem} > GlutenFree: {isGlutenFree ? "Yes" : "No"}</Text>
        <Text style={styles.otherItem} > Vegan:{isVegan ? "Yes" : "No"}</Text>
        <Text style={styles.otherItem} > Vegetarian:{isVegetarian ? "Yes" : "No"}</Text>
        <Text style={styles.otherItem} > Lactose Free: {isLactoseFree ? "Yes" : "No"}</Text>
      </View>
    </ScrollView>
  );
}

export default MealDetailView;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#312f2f",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 14,
    color: "white",
  },
  otherTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    width: "85%",
    margin: 10,
    textAlign: "center",
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  recipie: {
    padding: 10,
    alignItems: "center",
  },
  ingredents: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    color: "black",
    backgroundColor: "#925b8f",
    width: 400,
    textAlign: "center",
    padding: 4,
    margin: 3,
    color: "white",
    borderRadius: 10,
    fontSize: 18,
  },
  steps: {
    alignItems: "center",
  },
  otherItem:{
    color: "white",
    fontSize: 18,
  }
});
