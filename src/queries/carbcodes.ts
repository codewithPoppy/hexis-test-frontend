import { gql } from "@apollo/client";

export const GET_CARBCODES = gql`
  query GetCarbCodes($from: String!, $to: String!) {
    carbCodes(from: $from, to: $to) {
      id
      createdAt: created_at
      mealType: meal_type
      isTracked: is_tracked
      date
      targetCaloriesMin: target_calories_min
      targetCaloriesMax: target_calories_max
      targetCarbsMin: target_carbs_min
      targetCarbsMax: target_carbs_max
      targetTime: target_time
      trackedCalories: tracked_calories
      trackedCarbs: tracked_carbs
      trackedProtein: tracked_protein
      trackedFat: tracked_fat
      trackedTime: tracked_time
    }
  }
`;

export const ADD_CARBCODE = gql`
  mutation AddCarbCode($date: String!) {
    addCarbCode(date: $date) {
      id
      createdAt: created_at
      mealType: meal_type
      isTracked: is_tracked
      date
      targetCaloriesMin: target_calories_min
      targetCaloriesMax: target_calories_max
      targetCarbsMin: target_carbs_min
      targetCarbsMax: target_carbs_max
      targetTime: target_time
      trackedCalories: tracked_calories
      trackedCarbs: tracked_carbs
      trackedProtein: tracked_protein
      trackedFat: tracked_fat
      trackedTime: tracked_time
    }
  }
`;

export const DELETE_CARBCODE = gql`
  mutation DeleteCarbCode($id: String!) {
    deleteCarbCode(id: $id)
  }
`;
