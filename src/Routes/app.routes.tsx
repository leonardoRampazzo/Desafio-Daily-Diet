import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Confirm from "@screens/Confirm";
import Home from "@screens/Home";
import Meal from "@screens/Meal";
import MealView from "@screens/MealView";
import Status from "@screens/Status";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="meal" component={Meal} />
      <Screen name="mealView" component={MealView} />
      <Screen name="status" component={Status} />
      <Screen name="confirm" component={Confirm} />
    </Navigator>
  );
}
