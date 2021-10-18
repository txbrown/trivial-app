export interface GameQuestionsResponse {
  response_code: number;
  results: Question[];
}

export interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: CorrectAnswer;
  incorrect_answers: CorrectAnswer[];
}

export enum CorrectAnswer {
  False = "False",
  True = "True"
}

export enum Difficulty {
  Hard = "hard"
}

export enum Type {
  Boolean = "boolean"
}
