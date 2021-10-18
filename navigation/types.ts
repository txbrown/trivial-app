import { NavigationProp, RouteProp } from "@react-navigation/native";
import { CorrectAnswer, Question } from "../types/api";

export type TrainingSessionStackParamList = {
  TrainingSession: { t: string };
  ExerciseSet: { title: string; description: string };
};

export type RootStackParamList = {
  Welcome: undefined;
  Questions?: {
    reset?: boolean
  };
  Score: {
    answers: Answers;
    questions: Question[];
  };
};

export type WelcomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Welcome"
>;

export type QuestionsScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Questions"
>;

export type ScoreScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Score"
>;

export type ScoreScreenRouteProp = RouteProp<RootStackParamList, "Score">;
export type QuestionScreenRouteProp = RouteProp<RootStackParamList, "Questions">;
