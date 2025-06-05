// /src/@types/meal.d.ts
export { };

declare global {
  type MealFromStorage = {
    Name: string;
    Desc: string;
    Data: string;
    Hour: string;
    Status: boolean;
  };

  type Meal = {
    Name: string;
    Desc: string;
    Data: sting;
    Hora: string;
    Status: boolean;
  };

  type Section = {
    title: string;
    data: SectionItem[];
  };
}