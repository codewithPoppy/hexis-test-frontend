export type Macro = {
  id: string;
  createdAt: string;
  date: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

export type MealType = "Breakfast" | "Lunch" | "Dinner";
export type TrackedData = {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  time: Date;
};

export type CarbCode = {
  id: string;
  createdAt: string;
  mealType: MealType;
  date: string;
  isTracked: boolean;
  targetCaloriesMin: number;
  targetCaloriesMax: number;
  targetCarbsMin: number;
  targetCarbsMax: number;
  targetTime: string;
  trackedCalories: number;
  trackedCarbs: number;
  trackedProtein: number;
  trackedFat: number;
  trackedTime: string;
};

export type WorkoutPopupType = "min" | "intra" | "tracked";

export type WorkoutType = "race" | "strength" | "endurance";

export type Workout = {
  id: string;
  createdAt: string;
  popupType: WorkoutPopupType;
  date: string;
  workoutType: WorkoutType;
  startTime: string;
  endTime: string;
  description: string;
  mod: number;
  gPerHour: number;
  isTracked: boolean;
  trackedCalories: number;
  trackedCarbs: number;
  trackedProtein: number;
  trackedFat: number;
  trackedTime: string;
};

export type DayPlan = {
  date: Date;
  macro?: Macro;
  planItems: (CarbCode | Workout)[];
};
