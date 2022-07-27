import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailViewScreen from "./screens/MealDetailViewScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#ccc" },
        drawerContentStyle:{backgroundColor:'#ccc'},
        drawerInactiveTintColor:'black',
        drawerActiveTintColor:'white',
        drawerActiveBackgroundColor:'green'
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon:({color})=><Ionicons name="home" color={color} size={25} />,
        title: "All Categories",
      }} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
        drawerIcon:({color})=><Ionicons name="heart" color='red' size={25} />,
        title: "Favorite Meals",
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#ccc" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetailView"
            component={MealDetailViewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
