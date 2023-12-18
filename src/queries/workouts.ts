import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
  query GetWorkouts($from: String!, $to: String!) {
    workouts(from: $from, to: $to) {
      id
      createdAt: created_at
      date
      popupType: popup_type
      workoutType: workout_type
      startTime: start_time
      endTime: end_time
      description
      mod
      gPerHour: g_per_hour
      isTracked: is_tracked
      trackedCalories: tracked_calories
      trackedCarbs: tracked_carbs
      trackedProtein: tracked_protein
      trackedFat: tracked_fat
      trackedTime: tracked_time
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($date: String!) {
    addWorkout(date: $date) {
      id
      createdAt: created_at
      date
      popupType: popup_type
      workoutType: workout_type
      startTime: start_time
      endTime: end_time
      description
      mod
      gPerHour: g_per_hour
      isTracked: is_tracked
      trackedCalories: tracked_calories
      trackedCarbs: tracked_carbs
      trackedProtein: tracked_protein
      trackedFat: tracked_fat
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation DeleteWorkout($id: String!) {
    deleteWorkout(id: $id)
  }
`;
