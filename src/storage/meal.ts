import AsyncStorage from '@react-native-async-storage/async-storage';


import { MEAL_COLLECTION } from './storage.config';


export async function getMeals() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

  const meals: {}[] = storage ? JSON.parse(storage) : [];

  return meals;
}

export async function mealCreate(meal: Meal) {
  try {
    const storedMeals = await getMeals();

    const storage = JSON.stringify([...storedMeals, meal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

  } catch (erro) {
    throw erro;
  }
}

export async function mealDelete(meal: Meal) {

  try {
    const storedMeals = await getMeals();
    const filtered = storedMeals.filter((item: any) => {
      return !(
        item.Name === meal.Name &&
        item.Desc === meal.Desc &&
        item.Data === meal.Data &&
        item.Hour === meal.Hora &&
        item.Status === meal.Status
      );
    });

    const mealJson = JSON.stringify(filtered);
    await AsyncStorage.setItem(MEAL_COLLECTION, mealJson);
  }
  catch (erro) {
    throw erro;
  }
}

export async function editMeal(meal: Meal) {

  try {
    await mealDelete(meal);
    await mealCreate(meal);
  }
  catch (erro) {
    throw erro;
  }

}